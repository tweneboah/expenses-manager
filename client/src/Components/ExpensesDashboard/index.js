import React, { Component } from "react";
import ExpensesList from "../ExpensesList";
import { totalExpenses } from "../../redux/actions/expenses-actions";
import { connect } from "react-redux";
import ExpensesSummary from "../ExpensesSummary";
class ExpensesDashboard extends Component {
  render() {
    return (
      <div>
        <h1>ExpensesDashboard</h1>
        <ExpensesSummary />
        <ExpensesList />
      </div>
    );
  }
}

export default connect(
  null,
  totalExpenses
)(ExpensesDashboard);
