import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from '../../redux/store'
//CUSTOM COMPONENTS
import { fetchExpenses } from '../../redux/actions/expensesActions';
import { setTextFilter } from '../../redux/actions/expensesFilterAction';
import getVisibleExpenses from '../../utils/getVisibleExpenses';

class ExpensesList extends Component {
    componentDidMount() {
        this.props.dispatch(fetchExpenses());
        //Calling the setTextFilter
        this.props.dispatch(setTextFilter('rent'))
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
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: state,
        visible2: getVisibleExpenses(state.expensesRootReducer.expenses, state.filters)
    }
}
export default connect(mapStateToProps)(ExpensesList);