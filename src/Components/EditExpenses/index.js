import React, { Component } from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpensesForm";
import {
  editExpense,
  removeExpense
} from "../../redux/actions/expenses-actions";
import store from "../../redux/store";

class EditExpenses extends Component {
  render() {
    return (
      <div>
        <h1 onClick={this.searchId}>Edit Expenses</h1>
        <h2>Your are editinting {this.props.match.params.id}</h2>

        {/* Remember that the expense form takes submit function and other props so will pass the expense data whose id is been found to it */}
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={expense => {
            //Dispatch the addExpense Action
            //Remember that this takes id and the object
            store.dispatch(editExpense(this.props.expense.id, expense));
            //Redirect
            this.props.history.push("/dashboard");
          }}
        />

        <button
          onClick={() => {
            store.dispatch(removeExpense({ id: this.props.expense.id }));
            this.props.history.push("/");
          }}
        >
          Remove
        </button>
      </div>
    );
  }
}

//HOC

//For HOC, we also have access to props as a second argument
const mapStateToprops = (state, props) => {
  return {
    //We have to connect to the store and get access to the data and then we search through the array to find the expenses who's id is in the url

    //Finding data by id in mogoose we will use findById

    //Now the object expense contains only one item whose id is been found therefore will put this into the form values of the edit form
    expense: state.expenses.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};
export default connect(
  mapStateToprops,
  { editExpense }
)(EditExpenses);
