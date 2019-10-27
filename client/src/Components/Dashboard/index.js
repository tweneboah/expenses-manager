import React, { Component } from 'react';
import ExpensesList from '../ExpensesList'
import { connect } from 'react-redux'
import { fetchExpenses } from '../../redux/actions/expensesActions'

class Dashboard extends Component {
    // componentDidMount() {
    //     this.props.dispatch(fetchExpenses())
    // }

    // componentDidUpdate() {
    //     this.props.dispatch(fetchExpenses())
    // }
    render() {
        console.log('Dash', this.props)
        return (
            <div>
                <h3>Dashboard</h3>
                <ExpensesList />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: state
    }
}
export default connect(mapStateToProps)(Dashboard);