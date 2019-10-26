import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from '../../redux/store'
//CUSTOM COMPONENTS
import { fetchExpenses, deleteExpense } from '../../redux/actions/expensesActions';
import { setTextFilter } from '../../redux/actions/expensesFilterAction';
import getVisibleExpenses from '../../utils/getVisibleExpenses';

class ExpensesList extends Component {
    componentDidMount() {
        store.dispatch(fetchExpenses());
        //Calling the setTextFilter
        this.props.dispatch(setTextFilter(''))
    }

    render() {

        //METHOD 1
        let state = store.getState();
        let expenses = state.expensesRootReducer.expenses
        let filters = state.filters

        if (expenses.length === 0) {
            console.log('waiting2.....')
        } else {
            const visible = getVisibleExpenses(expenses, filters)
            console.log('From visible', visible)
        }

        console.log(this.props.visible2)
        return (

            < div >
                <h1>Expenses List</h1>
                {this.props.filteredExpenses ? this.props.filteredExpenses.map((expense) => {
                    return (
                        <div key={expense._id}>
                            <h3>{expense.description}</h3>
                            <p>{expense.amount}</p>
                            <p>{expense.notes}</p>
                            <button onClick={() => store.dispatch(deleteExpense(expense._id))
                            }>Delete</button>
                            <hr />
                        </div>
                    )
                }) : 'Loading'}
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {

        filteredExpenses: getVisibleExpenses(state.expensesRootReducer.expenses, state.filters)
    }
}
export default connect(mapStateToProps)(ExpensesList);