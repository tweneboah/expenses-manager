import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from '../../redux/store'
import { Link } from 'react-router-dom'
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
                <div id="invoice">


                    <div class="invoice overflow-auto">
                        <div style={{ minWidth: '600px' }}>

                            <main>

                                <table border="0" cellspacing="0" cellpadding="0">
                                    <thead>
                                        <tr>
                                            <th>DESCRIPTION</th>
                                            <th class="text-left">Amount</th>
                                            <th class="text-right">DATE</th>


                                        </tr>
                                    </thead>
                                    <tbody>


                                        {this.props.filteredExpenses.map((expense) => {
                                            return <tr>
                                                {/* <td class="no">01</td> */}
                                                <td class="text-left"><h3><Link to={`/expense/${expense._id}`}>{expense.description}</Link></h3>{expense.notes}</td>
                                                <td class="unit">$40.00</td>
                                                <td class="qty">20/10/19</td>

                                            </tr>
                                        })}

                                    </tbody>

                                </table>

                            </main>
                            <footer>
                                All the data entered are valid
        </footer>
                        </div>

                        <div></div>
                    </div>
                </div>

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