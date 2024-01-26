import { useContext, useEffect, useState } from 'react';
import axios from '../../api/axios';
import { UserContext } from '../../context/UserContext';

type BudgetResponse = {
    budgetId: string;
    name: string;
    description: string;
    budgetEntitiesIds: string[];
    budgetUsersIds: string[];
    primary: boolean;
};

const useFetchBudgetInfo = () => {
    const [budgetInfo, setBudgetInfo] = useState<BudgetResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { budgetsIds } = useContext(UserContext);

    useEffect(() => {
        const fetchBudgetInfo = async () => {
            if (budgetsIds.length > 0) {
                try {
                    setLoading(true);
                    const response = await axios.get(`/api/v1/auth/getBudget/${budgetsIds[0]}`);
                    setBudgetInfo(response.data);
                } catch (error) {
                    setError('Error fetching budget information');
                } finally {
                    setLoading(false);
                }
            } else {
                setError('Invalid or empty budgetsIds');
                setLoading(false);
            }
        };

        if (budgetsIds) {
            fetchBudgetInfo();
        }
    }, [budgetsIds]);

    return { budgetInfo, loading, error };
};

export default useFetchBudgetInfo;
