//Expenses Reducers

const expensesDefaultState = [];
const expenseReducer = (state = expensesDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default expenseReducer;
