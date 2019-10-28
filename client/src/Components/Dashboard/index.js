import React, { Component } from 'react';
import ExpensesList from '../ExpensesList/ExpensesList'
import { connect } from 'react-redux'
import { fetchExpenses } from '../../redux/actions/expensesActions';
import getVisibleExpenses from '../../utils/getVisibleExpenses'
import ExpensesSummary from '../ExpensesSummary'
class Dashboard extends Component {
    componentDidMount() {
        this.props.dispatch(fetchExpenses())
    }

    render() {

        console.log('Dash', this.props)
        return (
            <div>
                <h3>Dashboard</h3>
                <ExpensesSummary />
                <ExpensesList />

            </div>
        );


    }
}



const mapStateToProps = (state) => {

    const expenses = state.expensesRootReducer.expenses;
    const filters = state.filters;


    return {

        filteredExpenses: getVisibleExpenses(expenses, filters),

    }


}


export default connect(mapStateToProps)(Dashboard);