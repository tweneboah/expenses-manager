import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from '../../redux/store'
//CUSTOM COMPONENTS
import { fetchExpenses, deleteExpense, editExpense } from '../../redux/actions/expensesActions';
import getVisibleExpenses from '../../utils/getVisibleExpenses';
import getExpensesTotal from '../../utils/totalExpenses';
import ExpensesFilters from '../ExpensesFilters';
import ExpensesListItem from './ExpensesListItem';



class ExpensesList extends Component {
    componentDidMount() {
        store.dispatch(fetchExpenses());
    }


    deleteExpenseItem = (id) => {
        store.dispatch(deleteExpense(id));
        //Update the state after deleting
        store.dispatch(fetchExpenses());

    }

    //EDIT
    editExpense = (id, update) => {
        store.dispatch(editExpense(id))
    }
    render() {
        return (

            <div>
                <ExpensesFilters />
                <h1>Expenses List</h1>
                {this.props.filteredExpenses ? this.props.filteredExpenses.map((expense) => {
                    //Passing the expense to this component to render
                    return <ExpensesListItem expenses={expense} key={expense._id}

                        delete={() => this.deleteExpenseItem(expense._id)}

                        editExpense={`/expense/${expense._id}`}
                    />
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