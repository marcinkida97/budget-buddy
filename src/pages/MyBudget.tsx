import React, { useState } from 'react';
import Header from '../components/Header/Header';
import AddButton from '../components/AddButton';
import BudgetTable from '../components/Table/BudgetTable';
import useFetchBudgetEntitiesInfo from './hooks/useFetchBudgetEntitiesInfo';
import AddEntryModal from "../components/AddEntryModal";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

type BudgetEntityType = {
    entityId: string
    amount: number,
    type: string,
    category: string,
    date: Date
}

const calculateBudgetBalance = (budgetEntitiesList: BudgetEntityType[]) => {
    let budgetBalance = 0;

    budgetEntitiesList.forEach(entity => {
        if (entity.type === 'Income') {
            budgetBalance += entity.amount;
        }
        if (entity.type === 'Expense') {
            budgetBalance -= entity.amount;
        }
    });

    return budgetBalance
}

const MyBudget = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const { budgetEntitiesInfo } = useFetchBudgetEntitiesInfo();

    const handleOnClick = () => {
        setIsAddModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsAddModalOpen(false);
        window.location.reload();
    };

    return (
        <>
            <Header />
            <Container fluid>
                <Row>
                    <Col md={9}>
                        <h3>Budget balance: {calculateBudgetBalance(budgetEntitiesInfo.budgetEntitiesList)}</h3>
                    </Col>
                    <Col md={3} className={"d-flex justify-content-end"}>
                        <AddButton buttonName="Add entity" onClick={handleOnClick} />
                    </Col>
                </Row>
            </Container>
            {budgetEntitiesInfo && <BudgetTable budgetEntitiesList={budgetEntitiesInfo.budgetEntitiesList}/>}
            <AddEntryModal isOpen={isAddModalOpen} onClose={handleCloseModal} />
        </>
    );
};

export default MyBudget;
