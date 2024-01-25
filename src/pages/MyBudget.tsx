import React, { useState } from 'react';
import Header from '../components/Header/Header';
import AddButton from '../components/AddButton';
import BudgetTable from '../components/Table/BudgetTable';
import useFetchBudgetEntitiesInfo from './hooks/useFetchBudgetEntitiesInfo';
import AddEntryModal from "../components/AddEntryModal";

type BudgetEntityType = {
    amount: number,
    type: string,
    category: string,
    date: Date
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
            <AddButton buttonName="Add entity" onClick={handleOnClick} />
            {budgetEntitiesInfo && <BudgetTable   budgetEntitiesList={budgetEntitiesInfo.budgetEntitiesList}/>}
            <AddEntryModal isOpen={isAddModalOpen} onClose={handleCloseModal} />
        </>
    );
};

export default MyBudget;
