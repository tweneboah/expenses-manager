import React, { Component } from 'react';
import { connect } from 'react-redux'
import getVisibleExpenses from '../../utils/getVisibleExpenses'
import store from '../../redux/store'
import { fetchExpenses } from '../../redux/actions/expenses-actions'
import { setTextFilter } from '../../redux/actions/expensesFiltersAction'
import { stat } from 'fs';
class ExpensesList extends Component {

    componentDidMount() {
        store.dispatch(setTextFilter('Node js'));
        store.dispatch(fetchExpenses())
    }
    render() {

        // const state = store.getState();

        // if (!state.expenses.expenses) {
        //     console.log('WOOO')
        // }
        // console.log(state.expenses.expenses)
        // // const visible = getVisibleExpenses(state.expenses.expenses, state.filters);

        // const state = store.getState()
        // console.log(state.expensesRoot)
        // const visible = getVisibleExpenses(state.expensesRoot, state.filters.text)
        //console.log(visible)
        if (this.props.expensesFromComp === 0) {
            alert('WOOOO')
        }
        console.log(this.props.expensesFromComp)
        console.log(this.props.filters.text)
        return (


            <div>
                <h1>Expenses List</h1>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        expensesFromComp: state.expensesRoot,
        filters: state.filters,


    }
}
export default connect(mapStateToProps)(ExpensesList);