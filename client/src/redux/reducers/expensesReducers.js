//Expenses Reducers

const expensesDefaultState = {
    expenses: []
};

const expenseReducer = (state = expensesDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.payload];

        case "FETCH_EXPENSES":
            return {
                ...state,
                expenses: action.payload
            };
        default:
            return state;
    }
};

export default expenseReducer;
