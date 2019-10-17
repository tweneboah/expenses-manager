import React, { Component } from "react";
import { connect } from 'react-redux';
import ExpenseForm from '../ExpensesForm'
class EditExpenses extends Component {

  render() {
    
    console.log(this.props)

 
    return (
      <div>
        <h1 onClick = {this.searchId}>Edit Expenses</h1>
        <h2>Your are editinting {this.props.match.params.id}</h2>

        <ExpenseForm/>
      </div>
    );
  }
}

//HOC

//For HOC, we also have access to props as a second argument
const mapStateToprops = (state, props ) => {
   return {
     ////We have to connect to the store and get access to the data and then we search through the array to find the expenses who's id is in the url

     expense: state.expenses.find((expense) => {
       return expense.id === props.match.params.id
     })
   }
}
export default connect(mapStateToprops) (EditExpenses);
