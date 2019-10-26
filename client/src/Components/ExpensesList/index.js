import React, { Component } from 'react';
import { connect } from 'react-redux'

class ExpensesList extends Component {

    render() {
        console.log(this.props.expenses)
        return (
            <div>
                <h1>Expenses List</h1>
                {this.props.expenses.map((expense) => {
                    return (
                        <div key={expense._id}>
                            <h3>{expense.description}</h3>
                            <h4>{expense.amount}</h4>
                            <h5>{expense.createdAt}</h5>
                        </div>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: state
    }
}
export default connect(mapStateToProps)(ExpensesList);