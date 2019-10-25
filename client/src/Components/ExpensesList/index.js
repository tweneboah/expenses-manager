import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchExpenses } from '../../redux/actions/expenses-actions'
import expensesSlectors from '../../utils/expensesFilters'


class ExpensesList extends Component {
    componentDidMount() {
        this.props.dispatch(fetchExpenses())
    }
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
        expenses: expensesSlectors(state.expensesRootReducer.expenses, 'r')
    }
}
export default connect(mapStateToProps)(ExpensesList);