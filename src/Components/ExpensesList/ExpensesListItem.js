import React from "react";
import numeral from "numeral";
import { Link } from "react-router-dom";
import moment from "moment";

const ExpensesListItem = ({ expense }) => {
  return (
    <div>
      <div>
        <Link to={`/edit/${expense.id}`}>
          <h3>{expense.description}</h3>
        </Link>
      </div>

      {/*
      
      <p>Created At: {expense.createdAt}</p> */}

      {/* Format date to use moment for nice display
        Remember that moment requires timeStamp so we will pass createdAt to it
      */}

      <h5>
        {/* Using numeraljs to format money */}
        {numeral(expense.amount).format("$0,0.00")} -
        {moment(expense.createdAt).format("MMM Do, YYYY")}
      </h5>
    </div>
  );
};

export default ExpensesListItem;
