import React, { Component } from "react";
import expenses_total from "../../utils/expenses-summary";
import selectedExpenses from "../../utils/expenses-selectors";
import { connect } from "react-redux";
import numeral from "numeral";

class ExpensesSummary extends Component {
  render() {
    return (
      <div>
        <h2>ExpensesSummary</h2>
        <h3>
          {/* Format amount using numeral js */}
          You are viewing {this.props.expensesLength} expense(s) - Totaling to{" "}
          {numeral(this.props.expensesSumTotal).format("$0,0.00")}
        </h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //Get visible  Expenses

  //since we want to get the total expenses upon filtering and sorting we will call our function on the visibleExpenses function
  const visibleExpenses = selectedExpenses(state.expenses, state.filters);
  return {
    expensesSumTotal: expenses_total(visibleExpenses),
    expensesLength: visibleExpenses.length
  };
};
export default connect(mapStateToProps)(ExpensesSummary);
