import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Header extends Component {

    render() {
        return (
            <div>
                <div><Link to='/'>Home</Link></div>
                <Link to='/list'>List of Expenses</Link>
                <div><Link to='/create'>Create</Link></div>
                <div><Link to='/dashboard'>Dashboard</Link></div>
            </div>
        );
    }
}

export default Header;