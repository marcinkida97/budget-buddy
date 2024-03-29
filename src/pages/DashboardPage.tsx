import '../App.css';
import Header from "../components/Header/Header";
import BudgetChart from "../components/BudgetChart";
import useFetchBudgetEntitiesInfo from "../hooks/useFetchBudgetEntitiesInfo";

const DashboardPage = () => {
    const { budgetEntitiesInfo } = useFetchBudgetEntitiesInfo();

  return (
      <>
        <Header/>
        <BudgetChart budgetEntitiesList={budgetEntitiesInfo.budgetEntitiesList}/>
      </>
  );
}

export default DashboardPage;
