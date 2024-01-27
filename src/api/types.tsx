export type BudgetEntityType = {
    entityId: string;
    amount: number;
    type: string;
    category: string;
    date: Date;
    budgetId: string;
};

export type BudgetEntityList = {
    budgetEntitiesList: BudgetEntityType[];
};