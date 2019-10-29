import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {

    render() {
        return (
            <div >
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div class="container">
                        <Link class="navbar-brand" to="/">Hicotek-Xpensify</Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <Link class="nav-link" to="/">Home
                <span class="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/dashboard">Dashboard</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/create">Create expenses</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>


        );
    }
}

export default Header;