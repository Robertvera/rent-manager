import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import './navbar.css';
import { LogOut } from 'react-feather'

class NavBar extends Component {
    render() {
        return (
            <nav className="col-12 navbar navbar-dark sticky-top flex-nowrap p-0">
                <a className="navbar-brand col-sm-3 col-md-2 pt-4 text-center" href="#">Rent Manager</a>
                <ul className="navbar-nav px-5">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="#"><LogOut /></a>
                    </li>
                </ul>
            </nav>
        )
    }
}


export default NavBar