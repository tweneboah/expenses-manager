import React from "react";
import store from "../../redux/store";
import {removeExpense } from "../../redux/actions/expenses-actions";
import { Link } from "react-router-dom";




const ExpensesListItem = ({ expense }) => {
  return (
    <div>
       
      <h3>{expense.description}</h3>
      <p>Amount: {expense.amount}</p>
      <Link to={`/edit/${expense.id}`}>Edit</Link>
      <p>Created At: {expense.createdAt}</p>
      <button onClick={() => store.dispatch(removeExpense({ id: expense.id }))}>
        Delete
      </button>
    </div>
  );
};

export default ExpensesListItem;
