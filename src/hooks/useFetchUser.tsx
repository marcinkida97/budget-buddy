import {useContext, useEffect, useState} from 'react';
import axios from '../api/axios';
import {UserContext} from "../context/UserContext";

type UserResponse = {
    userId: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    usersBudgetsIds: string[];
    role: string;
}

const useFetchUser = (userId: string) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [userData, setUserData] = useState<UserResponse | null>(null);
    const {setUserId, setLastname, setFirstname, setBudgetIds} = useContext(UserContext);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`/api/v1/auth/getUser/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setUserData(response.data);
                if(response.data){
                    setUserId(response.data.userId);
                    setFirstname(response.data.firstname);
                    setLastname(response.data.lastname);
                    setBudgetIds(response.data.usersBudgetsIds);
                }
            } catch (error) {
                setError('Error fetching user data');
            } finally {
                setLoading(false);
            }
        };

        if (userId && userId.trim() !== '') {
            fetchUser();
        } else {
            setError('Invalid userId');
            setLoading(false);
        }
    }, [setBudgetIds, setFirstname, setLastname, setUserId, userId]);

    return { loading, error, userData };
};

export default useFetchUser;
