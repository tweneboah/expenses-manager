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
    default:
      return state;
  }
};

export default expenseReducer;
