import React from 'react';
import { connect} from 'react-redux';
import ExpensesListItem from '../ExpensesList/ExpensesListItem'
import selectedMethod from '../../selectors/expenses-selectors';
import ExpenseListFilters from '../ExpenseListFilters'

const ExpensesList = ({expenses}) => {
    console.log('ExpensesList', expenses)
    return (
        <div>
            <h1>ExpensesList</h1>
            <ExpenseListFilters/>
            <p>Total Expenses : {expenses.length}</p>
            {expenses.map((expense) => (
                <ExpensesListItem key = {expense.id}  expense = {expense}/>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log('MAP', state)
    return {
        expenses: selectedMethod(state.expenses, state.filters)
    }
}
export default connect(mapStateToProps) (ExpensesList);