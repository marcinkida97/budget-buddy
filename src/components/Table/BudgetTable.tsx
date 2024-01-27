import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";

type BudgetEntityProps = {
    budgetEntitiesList: Array<{
        entityId: string;
        amount: number;
        type: string;
        category: string;
        date: Date;
        budgetId: string;
    }>;
    onDelete: (entityId: string) => void;
};

const BudgetTable = ({ budgetEntitiesList, onDelete }: BudgetEntityProps) => {
    return (
        <Table striped bordered hover variant="light" className={"textSize"}>
            <thead>
            <tr>
                <th>#</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Category</th>
                <th>Date</th>
                <th>Action</th>
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
                        <td>{new Date(entity.date).toLocaleDateString()}</td>
                        <td className={"d-flex justify-content-center"}>
                            <Button onClick={() => onDelete(entity.entityId)}>Delete</Button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={6}>Invalid data format</td>
                </tr>
            )}
            </tbody>
        </Table>
    );
};

export default BudgetTable;
