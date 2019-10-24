import React from "react";
import { createStore, combineReducers } from "redux";
import uuid from "uuid";
//Reducer is a pure function. That means the output is determined by the input;

//We create a reducer for root of data for example in our case we have expenses array and filters object

//ACTIONS

//Actions make changes to redux store through reducers.
//Action holds the data to be added to redux store through reducers
//Actions can send data to reducers by allowing the user to pass in data to the reducer or by the action strictly sending from a server to the store

//NOTE:

const addExpenses = ({
  description,
  note = "Enter Note",
  amount = "Enter amount",
  createdAt = "20/2/2019",
  year
}) => {
  return {
    type: "ADD_EXPENSE",
    expenses: {
      id: uuid(),
      description: description,
      note: note,
      amount: amount,
      createdAt: createdAt,
      year
    }
  };
};

//SET_TEXT_FILTER
export const setTextFilter = (text = "") => {
  return {
    type: "SET_TEXT_FILTER",
    payload: text
  };
};

//SORT BY DATE

//This action won't accept any value but it will display a static value so we don't pass anything to it

const sortByDate = () => {
  return {
    type: "SORT_BY_DATE"
  };
};

//SORT BY AMOUNT

const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT"
  };
};

//START END DATE

//The argument passed to this action when dispatching it is not an object or array so we don't have to destructure it

const setStartDate = date => {
  return {
    type: "SET_START_DATE",
    payload: date
  };
};

//START END DATE

const setEndDate = date => {
  return {
    type: "SET_END_DATE",
    payload: date
  };
};

//GET VISIBLE EXPENSES
const getVisibleExpenses = (expenses, { sortBy, text, endDate, startDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;

      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

//Expenses Reducers

const expensesDefaultState = [];
const expenseReducer = (state = expensesDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expenses];

    default:
      return state;
  }
};

//FILTERS REDUCER

const filtersDefaultState = {
  text: "",
  sortBy: "date", //date or amount
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.payload
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.payload
      };

    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.payload
      };
    default:
      return state;
  }
};

//STORE

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(
  addExpenses({
    description: "rent",
    amount: 300,
    createdAt: 1000,
    note: "Paid"
  })
);

store.dispatch(
  addExpenses({
    description: "rent",
    amount: 400,
    createdAt: 2000,
    note: "Paid 2"
  })
);

//store.dispatch(sortByDate());
//store.dispatch(sortByAmount());
store.dispatch(setEndDate(2000));
store.dispatch(setStartDate(150));
store.dispatch(setTextFilter("rent"));

//DESTRUCTURING

const Redux102 = props => {
  return (
    <div>
      <h1>Redux 102</h1>
    </div>
  );
};

export default Redux102;
