import React, { Component } from "react";
import axios from 'axios';


class UserRegistration extends Component {
    state = {
        username: '',
        password: ''
    }

    //CHANGE

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
        });
    };

    //FormSubmit

    onFormSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
        axios.post('/api/user/register', this.state).then((response) => {
            console.log(response.data)
        }).catch((e) => {
            console.log(e)
        })
    }
    render() {
        return (
            <div className='mt-5 pt-4 ml-3' >
                <form onSubmit={this.onFormSubmit}>
                    <input type='text' placeholder='Username' value={this.state.username} onChange={this.onUsernameChange} />

                    <input type='password' placeholder='Password' value={this.state.password} onChange={this.onPasswordChange} />

                    <button type='submit'>Register</button>
                </form>
            </div>
        );
    }
}

export default UserRegistration;



