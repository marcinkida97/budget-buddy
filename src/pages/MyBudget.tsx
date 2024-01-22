import '../App.css';
import BudgetTable from "../components/Table/BudgetTable";
import Header from "../components/Header/Header";
import AddButton from "../components/AddButton";
import {useState} from "react";
import AddEntryModal from "../components/AddEntryModal";

const MyBudget = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleAddEntity = () => {
        setIsAddModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsAddModalOpen(false);
    }

  return (
      <>
        <Header/>
          <AddButton buttonName='Add entity' onClick={handleAddEntity}/>
        <BudgetTable/>
          <AddEntryModal isOpen={isAddModalOpen} onClose={handleCloseModal} onAddEntry={()=>{}}/>
      </>
  );
}

export default MyBudget;
