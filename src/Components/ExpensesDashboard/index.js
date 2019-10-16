import React, { Component } from 'react';
import ExpensesList from '../ExpensesList';
class ExpensesDashboard extends Component {

    render() {
        return (
            <div>
                <h1>ExpensesDashboard</h1>
             <ExpensesList/>
            </div>
        );
    }
}

export default ExpensesDashboard;