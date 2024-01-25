import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import useFetchBudgetInfo from "./useFetchBudgetInfo";

type BudgetEntity = {
    budgetEntitiesList: Array<{
        entityId: string;
        amount: number;
        type: string;
        category: string;
        date: Date;
        budgetId: string;
    }>;
};


const useFetchBudgetEntitiesInfo = () => {
    const [budgetEntitiesInfo, setBudgetEntitiesInfo] = useState<BudgetEntity>({ budgetEntitiesList: [] });
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

    return { budgetEntitiesInfo: budgetEntitiesInfo || [], loading, error };
};

export default useFetchBudgetEntitiesInfo;