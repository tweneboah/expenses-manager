import React, { Component } from 'react';
import axios from 'axios';
import { editExpense, fetchExpenses } from '../../redux/actions/expensesActions';
import store from '../../redux/store'
class EditExpenses extends Component {

    state = {
        description: '',
        amount: '',
        notes: ''

    }

    onInputChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }
    componentDidMount() {
        axios.get(`/api/expense/${this.props.match.params.id}`).then((res) => {
            this.setState({
                description: res.data.description,
                amount: res.data.amount,
                notes: res.data.notes
            })
        })
    }

    //FORM SUBMIT
    onFormSubmit = (e) => {
        e.preventDefault()

        store.dispatch(editExpense(this.props.match.params.id, this.state))

        this.props.history.push('/dashboard')
    }
    render() {
        console.log('Edit component', this.state)
        return (
            <div>
                <h2>Editing....{this.props.match.params.id}</h2>
                <form onSubmit={this.onFormSubmit}>
                    <input value={this.state.description} onChange={this.onInputChange} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default EditExpenses;