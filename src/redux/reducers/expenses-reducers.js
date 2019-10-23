//Expenses Reducers

const expensesDefaultState = [];
const expenseReducer = (state = expensesDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.payload];

    case "REMOVE_EXPENSE":
      return state.filter(exp => exp.id !== action.payload.id);

    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });

    case "TOTAL_EXPNESE":
      return state
        .map(expense => {
          return expense.amount;
        })
        .reduce((acc, val) => {
          return acc + val;
        }, 0);
    default:
      return state;
  }
};

export default expenseReducer;
