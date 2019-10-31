import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchExpenses } from '../../redux/actions/expensesActions';
import getVisibleExpenses from '../../utils/getVisibleExpenses';
import totaleExpenses from '../../utils/totalExpenses';
import '../../assets/css/expensesSummary.css'
class EpensesSummary extends Component {

    componentDidMount() {
        // this.props.dispatch(fetchExpenses())
    }
    render() {
        console.log('Exp sumary', this.props)
        return (
            <div>



                <div className='main_wrapper'>
                    <div className='content_item1'>
                        <h2>Total Expenses : Ghs  {this.props.expenses}</h2>
                        <hr />
                        <p>Number of Expenses : {this.props.expensesTotalLength.length}</p>
                    </div>

                    {/* <div>
                        <h2>Total : 900</h2>
                        <p>Grand Total</p>
                    </div> */}
                </div>
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