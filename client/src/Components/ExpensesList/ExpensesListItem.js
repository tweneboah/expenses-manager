import React, { Component } from "react";

class ExpensesListItem extends Component {
    render() {
        console.log('Exp item', this.props)
        return (
            <div>
                <h1>ExpensesListItem</h1>
                <h3>{this.props.expenses.description}</h3>
                <p>{this.props.expenses.notes}</p>
                <p>{this.props.expenses.amount}</p>
                <button onClick={this.props.delete}>Delete</button>

                <a href={this.props.editExpense}>edit</a>
            </div>
        );
    }
}

export default ExpensesListItem;