import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from '../../redux/store'
//CUSTOM COMPONENTS
import { fetchExpenses, deleteExpense } from '../../redux/actions/expensesActions';
import getVisibleExpenses from '../../utils/getVisibleExpenses';
import getExpensesTotal from '../../utils/totalExpenses';
import ExpensesFilters from '../ExpensesFilters';

class ExpensesList extends Component {
    componentDidMount() {
        store.dispatch(fetchExpenses());
    }

    deleteExpenseItem = (id) => {
        //Returning many response from a function
        const loadedExpenses = store.dispatch(fetchExpenses())
        const deletedItem = store.dispatch(deleteExpense(id));

        return {
            loadedExpenses,
            deletedItem
        }

    }

    render() {
        return (

            < div >
                <ExpensesFilters />
                <h1>Expenses List</h1>
                {this.props.filteredExpenses ? this.props.filteredExpenses.map((expense) => {
                    return (
                        <div key={expense._id}>
                            <h3>{expense.description}</h3>
                            <p>{expense.amount}</p>
                            <p>{expense.notes}</p>
                            <button onClick={() => this.deleteExpenseItem(expense._id)
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

    const expenses = state.expensesRootReducer.expenses;
    const filters = state.filters;

    let visible = getVisibleExpenses(expenses, filters)
    return {

        filteredExpenses: getVisibleExpenses(expenses, filters),
        totalExpenses: getExpensesTotal(visible)
    }
}
export default connect(mapStateToProps)(ExpensesList);