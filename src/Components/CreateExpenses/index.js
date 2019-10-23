import React, { Component } from "react";
import ExpensesForm from "../ExpensesForm";
import store from "../../redux/store";
import { addExpense } from "../../redux/actions/expenses-actions";
import Header from "../Header";
class CreateExpenses extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Create Expenses</h1>

        <ExpensesForm
          onSubmit={expense => {
            store.dispatch(addExpense(expense));
            this.props.history.push("/dashboard");
          }}
        />
      </div>
    );
  }
}

export default CreateExpenses;
