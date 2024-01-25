import React, { createContext, ReactNode } from 'react';

interface UserContextProps {
    userId: string;
    setUserId: React.Dispatch<React.SetStateAction<string>>;
    firstname: string;
    setFirstname: React.Dispatch<React.SetStateAction<string>>;
    lastname: string;
    setLastname: React.Dispatch<React.SetStateAction<string>>;
    budgetsIds: string[];
    setBudgetIds: React.Dispatch<React.SetStateAction<string[]>>;
}

const defaultValues: UserContextProps = {
    userId: '',
    setUserId: () => {},
    firstname: '',
    setFirstname: () => {},
    lastname: '',
    setLastname: () => {},
    budgetsIds: [],
    setBudgetIds: () => {},
};

export const UserContext = createContext<UserContextProps>(defaultValues);

export const UserContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [userId, setUserId] = React.useState<string>('');
    const [firstname, setFirstname] = React.useState<string>('');
    const [lastname, setLastname] = React.useState<string>('');
    const [budgetsIds, setBudgetIds] = React.useState<string[]>([]);

    return (
        <UserContext.Provider value={{ userId, setUserId, firstname, setFirstname, lastname, setLastname, budgetsIds, setBudgetIds }}>
            {children}
        </UserContext.Provider>
    );
};