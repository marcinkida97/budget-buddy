import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import {BudgetEntityType} from "../types/types";

type BudgetEntityProps = {
    budgetEntitiesList: BudgetEntityType[];
    onDelete: (entityId: string) => void;
};

const BudgetTable = ({ budgetEntitiesList, onDelete }: BudgetEntityProps) => {
    return (
        <Table striped bordered hover responsive variant="light" className={"textSize table"}>
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Amount</th>
                <th scope="col">Type</th>
                <th scope="col" className="d-none d-sm-table-cell">Category</th>
                <th scope="col" className="d-none d-sm-table-cell">Date</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            {Array.isArray(budgetEntitiesList) ? (
                budgetEntitiesList.map((entity, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{entity.amount}</td>
                        <td>{entity.type}</td>
                        <td className="d-none d-sm-table-cell">{entity.category}</td>
                        <td>{new Date(entity.date).toLocaleDateString()}</td>
                        <td className={"d-flex justify-content-center"}>
                            <Button className={"btn btn-danger btn-sm"} onClick={() => onDelete(entity.entityId)}>Delete</Button>
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
