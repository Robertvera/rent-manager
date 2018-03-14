import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import './sidebar.css';
import { Activity, DollarSign } from 'react-feather'

class SideBar extends Component {
    render() {
        return (
            <nav className="col-md-2 col-sm-12 col-lg-2 bg-light d-block sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink className="nav-link active" href="#" to="/back/tenant/overview">
                                <Activity />
                                    Overview
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#" to="/back/tenant/payments">
                                <DollarSign/>
                                    Payments
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}


export default SideBar