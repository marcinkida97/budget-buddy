import React from 'react';
import Table from 'react-bootstrap/Table';

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

const BudgetTable = ({ budgetEntitiesList }: BudgetEntityProps) => {
    return (
        <Table striped bordered hover variant="light">
            <thead>
            <tr>
                <th>#</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Category</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            {Array.isArray(budgetEntitiesList) ? (
                budgetEntitiesList.map((entity, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{entity.amount}</td>
                        <td>{entity.type}</td>
                        <td>{entity.category}</td>
                        <td>{entity.date.toString()}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={5}>Invalid data format</td>
                </tr>
            )}
            </tbody>
        </Table>
    );
};

export default BudgetTable;
