import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import useFetchBudgetInfo from "./useFetchBudgetInfo";
import {BudgetEntityList, BudgetEntityType} from "../../api/types";

const useFetchBudgetEntitiesInfo = () => {
    const [budgetEntitiesInfo, setBudgetEntitiesInfo] = useState<BudgetEntityList>({ budgetEntitiesList: [] });
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
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
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