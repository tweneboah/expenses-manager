import React from "react";
import { connect } from "react-redux";
import ExpensesListItem from "../ExpensesList/ExpensesListItem";
import selectedMethod from "../../selectors/expenses-selectors";
import ExpenseListFilters from "../ExpenseListFilters";

const ExpensesList = ({ expenses }) => {
  return (
    <div>
      <h1>Total Expenses : {expenses.length}</h1>
      <ExpenseListFilters />
      <p></p>
      {expenses.map(expense => (
        <ExpensesListItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectedMethod(state.expenses, state.filters)
  };
};
export default connect(mapStateToProps)(ExpensesList);
