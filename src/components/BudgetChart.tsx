import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

type BudgetEntityProps = {
    budgetEntitiesList: Array<{
        entityId: string;
        amount: number;
        type: string;
        category: string;
        date: Date;
        budgetId: string;
    }>;
};

const BudgetChart = ({ budgetEntitiesList }: BudgetEntityProps) => {
    const categories = Array.from(new Set(budgetEntitiesList.map(item => item.category)));

    const incomeData = {
        label: 'Incomes',
        backgroundColor: '#36A2EB',
        data: categories.map(category =>
            budgetEntitiesList
                .filter(item => item.type === 'Income' && item.category === category)
                .reduce((sum, item) => sum + item.amount, 0)
        ),
    };

    const expenseData = {
        label: 'Expenses',
        backgroundColor: '#FF6384',
        data: categories.map(category =>
            budgetEntitiesList
                .filter(item => item.type === 'Expense' && item.category === category)
                .reduce((sum, item) => sum + item.amount, 0)
        ),
    };

    const chartData = {
        labels: categories,
        datasets: [incomeData, expenseData],
    };

    const chartOptions: ChartOptions<'bar'> = {
        maintainAspectRatio: true,
        scales: {
            x: {
                type: 'category',
                title: {
                    display: true,
                    text: 'Category'
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