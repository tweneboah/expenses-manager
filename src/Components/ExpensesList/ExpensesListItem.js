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
      <p>Amount: {expense.amount}</p>

      {/* <p>Created At: {expense.createdAt}</p> */}

      {/* Format date to use moment for nice display
        Remember that moment requires timeStamp so we will pass createdAt to it
      */}

      <p>
        {/* Using numeraljs to format money */}
        Amount: {numeral(expense.amount).format("$0,0.00")} -
        {moment(expense.createdAt).format("MMM Do, YYYY")}
      </p>
    </div>
  );
};

export default ExpensesListItem;
