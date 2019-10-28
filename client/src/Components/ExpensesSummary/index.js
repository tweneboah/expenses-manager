import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchExpenses } from '../../redux/actions/expensesActions';
import getVisibleExpenses from '../../utils/getVisibleExpenses';
import totaleExpenses from '../../utils/totalExpenses';

class EpensesSummary extends Component {

    componentDidMount() {
        // this.props.dispatch(fetchExpenses())
    }
    render() {
        console.log('Exp sumary', this.props)
        return (
            <div>
                <h2>EpensesSummary</h2>
                <h3>Total expenses is : {this.props.expenses}</h3>
                <h3>Total expenses is : {this.props.expensesTotalLength.length}</h3>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    //To be able to get the total expenses to change automatically base on search queries we have to first filter out base on user's search and then the outcome we pass it to our totaleExpenses function

    //STEPS:

    //1. Get all expenses and filters  separately
    let expenses = state.expensesRootReducer.expenses;
    let filters = state.filters

    //Run the getVisibleExpenses function to get the current data base on user's queries

    let filteredExpensesBaseOnChangeSearch = getVisibleExpenses(expenses, filters)


    return {
        expenses: totaleExpenses(filteredExpensesBaseOnChangeSearch),
        expensesTotalLength: filteredExpensesBaseOnChangeSearch

    }
}
export default connect(mapStateToProps)(EpensesSummary);