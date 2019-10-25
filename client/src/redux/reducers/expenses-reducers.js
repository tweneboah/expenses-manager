//Expenses Reducers

const expensesDefaultState = {
  expenses: []
};

const expenseReducer = (state = expensesDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
        //NOTE: If the property is the same as the one in the defaultState, it will override otherwise it will add a new property to this array
      };

    case "FETCH":
      return {
        ...state,
        expenses: action.payload
      };

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

    default:
      return state;
  }
};

export default expenseReducer;
