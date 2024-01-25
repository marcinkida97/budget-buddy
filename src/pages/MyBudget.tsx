import React, {useState} from 'react';
import Header from "../components/Header/Header";
import AddButton from "../components/AddButton";
import BudgetTable from "../components/Table/BudgetTable";
import useFetchBudgetEntitiesInfo from "./hooks/useFetchBudgetEntitiesInfo";

const MyBudget = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    useFetchBudgetEntitiesInfo();

    const handleOnClick = () => {
        setIsAddModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsAddModalOpen(false);
    }

    // const handleAddEntry = (newEntry) => {
    //     // Tutaj dodaj kod obsługi dodawania wpisu do backendu
    //     console.log('Adding entry:', newEntry);
    // };

    return (
        <>
            <Header />
            <AddButton buttonName='Add entity' onClick={handleOnClick} />
            <BudgetTable />
            {/*<AddEntryModal isOpen={isAddModalOpen} onClose={handleCloseModal} onAddEntry={handleAddEntry} />*/}
        </>
    );
}

export default MyBudget;