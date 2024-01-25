import { useContext, useEffect, useState } from 'react';
import axios from '../../api/axios';
import { UserContext } from '../../context/UserContext';
import useFetchBudgetInfo from "./useFetchBudgetInfo";

type BudgetEntityResponse = {
    entityId: string;
    amount: number;
    type: string;
    category: string;
    date: string; // Przyjmując, że 'date' jest stringiem w formacie ISO
    budgetId: string;
};

type BudgetEntitiesListResponse = BudgetEntityResponse[];

const useFetchBudgetEntitiesInfo = () => {
    const [budgetEntitiesInfo, setBudgetEntitiesInfo] = useState<BudgetEntitiesListResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { budgetInfo } = useFetchBudgetInfo();
    const budgetEntitiesIds = budgetInfo?.budgetEntitiesIds;

    useEffect(() => {
        const fetchBudgetEntitiesInfo = async () => {
                try {
                    setLoading(true);
                    const response = await axios.post('/api/v1/auth/getBudgetEntities', {
                        budgetEntitiesIds: budgetEntitiesIds,
                    });
                    setBudgetEntitiesInfo(response.data);
                    console.log(response.data)
                } catch (error) {
                    setError('Error fetching budget entities information');
                } finally {
                    setLoading(false);
                }
        };

        if (budgetEntitiesIds) {
            fetchBudgetEntitiesInfo();
        }
    }, [budgetEntitiesIds]);

    return { budgetEntitiesInfo, loading, error };
};

export default useFetchBudgetEntitiesInfo;
