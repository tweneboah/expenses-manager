import React, { Component } from "react";
import ExpensesList from "../ExpensesList";
import { totalExpenses } from "../../redux/actions/expenses-actions";
import { connect } from "react-redux";

class ExpensesDashboard extends Component {
  render() {
    return (
      <div>
        <h1>ExpensesDashboard</h1>
        <ExpensesList />
      </div>
    );
  }
}

export default connect(
  null,
  totalExpenses
)(ExpensesDashboard);
