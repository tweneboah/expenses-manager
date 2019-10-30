import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { addExpense, fetchExpenses } from '../../../redux/actions/expensesActions'
import store from '../../../redux/store'
class ExpensesForm extends Component {
    state = {
        description: '',
        notes: '',
        amount: ''
    };


    //OnAmountChange

    //We want to allow users to type in only numbers with decimal value so we will use a regression to achieve that
    onAmountChange = e => {
        const amount = e.target.value;

        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    //changeinput
    onChangeInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    //form submit

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onFormSubmit(this.state);
        //We have to update the newly created data because at the time this data is created we have already made our request
        store.dispatch(fetchExpenses());
        this.props.history.push('/dashboard')
        // alert('Expenses was added Successfully')
    };


    render() {

        return (
            <div className='container'>
                <div className='row justify-content-md-center m-5'>
                    <div className='col-md-6 '>
                        <h3 className='text-align-center'>Add Expenses</h3>
                        <div className='card'>
                            <div className='card-body'>
                                <form>
                                    <div class="form-group ">

                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Description"
                                            autoFocus
                                            name="description"
                                            onChange={this.onChangeInput}
                                        />

                                    </div>
                                    <div class="form-group">

                                        <input
                                            type="number"
                                            class="form-control"
                                            placeholder="amount"
                                            name="amount"
                                            onChange={this.onAmountChange}
                                        />
                                    </div>




                                    <textarea
                                        placeholder="Add notes (optional)"
                                        name="notes"
                                        class="form-control"
                                        onChange={this.onChangeInput}
                                    ></textarea>


                                    {/* Redirect after clicking */}
                                    <button type="submit"
                                        class="btn btn-primary m-3"
                                        onClick={this.onFormSubmit}
                                    >Add Expenses</button>

                                </form>

                            </div>
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}
//We are using with router because the react-router-dom is not rendering this component directly so we cannot have access to histtory, push, match and others so to make this accessible we use withRouter
export default withRouter(ExpensesForm);