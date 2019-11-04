import React, { Component } from "react";
import axios from 'axios';


class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    //ONCHANE METHODS

    //onUsernameChange

    onUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    };

    //onPasswordChange

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    //FormSubmit

    formSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('/api/user/login', this.state).then((response) => {
            console.log(response.data)
        }).catch((e) => {
            console.log(e)
        })
    }

    componentDidMount() {
        axios.get('/api/user').then((response) => {
            console.log('Your details are', response.data.username)
        }).catch((e) => {
            console.log('No user found')
        })
    }
    render() {
        return (
            <div className='m-5 p-3' >
                <form onSubmit={this.formSubmit}>
                    <input type='text' placeholder='Username' value={this.state.username} onChange={this.onUsernameChange} />
                    <input type='password' placeholder='Password' value={this.state.password} onChange={this.onPasswordChange} />

                    <button className='btn btn-success'>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;