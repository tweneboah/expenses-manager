// //Expenses Reducers

// const expensesDefaultState = {
//   expenses: []
// };

// const expenseReducer = (state = expensesDefaultState, action) => {
//   switch (action.type) {
//     case "ADD_EXPENSE":
//       return {
//         ...state,
//         expenses: [...state.expenses, action.payload]
//         //NOTE: If the property is the same as the one in the defaultState, it will override otherwise it will add a new property to this array
//       };

//     case "FETCH_EXPENSES":
//       return {
//         ...state,
//         expenses: action.payload
//       };
//     default:
//       return state;
//   }
// };

// export default expenseReducer;


// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'FETCH_EXPENSES':
      return [...state, action.payload]
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.payload
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });


    default:
      return state;
  }
};

