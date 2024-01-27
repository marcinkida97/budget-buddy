import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions} from 'chart.js';
import {BudgetEntityList, BudgetEntityType} from "../api/types";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const monthNames = [
    'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
    'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
];

const getUniqueMonthsArray = (data: BudgetEntityType[]) => {
    return Array.from(new Set(data.map(item => new Date(item.date).getMonth() + 1)));
};

const getSortedUniqueMonthsCategories = (uniqueMonthsArray: number[]) => {
    return uniqueMonthsArray.sort((a, b) => {
        const diff = (b + 12 - a) % 12 - (a + 12 - b) % 12;

        if (diff !== 0) {
            return diff;
        }

        return a - b;
    });
};

const getMonthlyData = (data: BudgetEntityType[], type: string, month: number) => {
    return data
        .filter(item => item.type === type && (new Date(item.date).getMonth() + 1) === month)
        .reduce((sum, item) => sum + item.amount, 0);
};

const BudgetChart = ({ budgetEntitiesList }: BudgetEntityList) => {
    budgetEntitiesList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const fiveMonthsAgo = new Date();
    fiveMonthsAgo.setMonth(fiveMonthsAgo.getMonth() - 5);

    const last5MonthsData = budgetEntitiesList.filter(item => new Date(item.date) >= fiveMonthsAgo);

    const uniqueMonthsArray = getUniqueMonthsArray(last5MonthsData);

    const sortedUniqueMonthsCategories = getSortedUniqueMonthsCategories(uniqueMonthsArray);

    const labels = uniqueMonthsArray.map(combination => monthNames[combination - 1]);

    const incomeData = {
        label: 'Incomes',
        backgroundColor: '#36A2EB',
        data: sortedUniqueMonthsCategories.map(month =>
            getMonthlyData(last5MonthsData, 'Income', month)
        ),
    };

    const expenseData = {
        label: 'Expenses',
        backgroundColor: '#FF6384',
        data: sortedUniqueMonthsCategories.map(month =>
            getMonthlyData(last5MonthsData, 'Expense', month)
        ),
    };

    const chartData = {
        labels,
        datasets: [incomeData, expenseData],
    };

    const chartOptions: ChartOptions<'bar'> = {
        maintainAspectRatio: true,
        scales: {
            x: {
                type: 'category',
                title: {
                    display: true,
                    text: 'Month'
                }
            },
            y: {
                type: 'linear',
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount'
                }
            },
        }
    };

    return (
        <div className={"p-2 textSize"}>
            <h3>Budget Chart</h3>
            <Bar
                data={chartData}
                width={5}
                height={3}
                options={chartOptions}
            />
        </div>
    );
};

export default BudgetChart;
