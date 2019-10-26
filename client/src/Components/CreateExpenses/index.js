import React, { Component } from 'react';
import ExpenseForm from '../CreateExpensesForm'
class CreateExpenses extends Component {

    render() {
        return (
            <div>
                <h1>Create Expenses</h1>
                <ExpenseForm />
            </div>
        );
    }
}

export default CreateExpenses;