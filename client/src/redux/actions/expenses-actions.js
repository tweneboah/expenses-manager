import uuid from "uuid";
//ACTIONS

//Actions make changes to redux store through reducers.
//Action holds the data to be added to redux store through reducers
//Actions can send data to reducers by allowing the user to pass in data to the reducer or by the action strictly sending from a server to the store

//NOTE:

//ADD_EXPENSE ACTION
export const addExpense = ({
  description = "",
  notes = "",
  amount = 0,
  createdAt = 0
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    payload: {
      id: uuid(),
      description,
      notes,
      amount,
      createdAt
    }
  };
};
//REMOVE_EXPENSE ACTION

export const removeExpense = ({ id }) => {
  return {
    type: "REMOVE_EXPENSE",
    payload: {
      id: id
    }
  };
};

//EDIT_EXPENSE
export const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates
  };
};

//TOTAL EXPENSES

export const totalExpenses = () => {
  return {
    type: "TOTAL_EXPNESE"
  };
};
