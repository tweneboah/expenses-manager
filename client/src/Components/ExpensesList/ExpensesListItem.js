import React, { Component } from "react";

class ExpensesListItem extends Component {
    render() {

        return (
            <div>
                <h1>ExpensesListItem</h1>


                <p>{this.props.expenses.amount}</p>
                <button onClick={this.props.delete}>Delete</button>

                <a href={this.props.editExpense}>edit</a>


            </div>
        );
    }
}

export default ExpensesListItem;