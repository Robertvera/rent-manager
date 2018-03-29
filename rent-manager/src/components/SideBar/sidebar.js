import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import './sidebar.css';
import { Activity, DollarSign, FileText, CreditCard, Home, Users, User } from 'react-feather'

class SideBar extends Component {    

conditionalMenu = (user) => {    

    switch(user) {
        case 'tenant': return (
                    <ul className="nav flex-column">
                        <li className="nav-item">
                        <NavLink className="nav-link" href="#" to="/back/tenant/overview">
                        <Activity />
                        Overview
                        </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#" to="/back/tenant/payments">
                            <DollarSign />
                            Payments
                            </NavLink>
                        </li>
                        </ul> 
                            )
                            break;
        case 'admin': return (
            <ul className="nav flex-column">
                <li className="nav-item">
                        <NavLink className="nav-link" href="#" to="/back/admin/overview">
                            <Activity />
                            Overview
                            </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#" to="/back/admin/properties">
                            <Home />
                            Properties
                            </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#" to="/back/admin/leases">
                            <FileText />
                            Leases
                            </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#" to="/back/admin/tenants">
                            <Users />
                            Tenants
                            </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#" to="/back/admin/payments">
                            <DollarSign />
                            Payments
                            </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#" to="/back/admin/owners">
                            <User />
                            Owners
                            </NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink className="nav-link" href="#" to="/back/admin/transfers">
                            <CreditCard />
                            Transfers
                            </NavLink>
                    </li> */}
                </ul> 
                    )
                    break;
        case 'owner': return (
                 <ul className="nav flex-column">
                <li className="nav-item">
                        <NavLink className="nav-link" href="#" to="/back/owner/overview">
                            <Activity />
                            Overview
                            </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#" to="/back/owner/payments">
                            <DollarSign />
                            Payments
                            </NavLink>
                    </li>
                </ul> 
                    )
                    break;
    }
}

render() 
{
    const userType = sessionStorage.getItem('userType')
    return (
        <nav className="col-md-2 col-sm-12 col-lg-2 bg-light d-block sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    {/* {this.conditionalMenu(this.props.user)}                                                     */}
                    {this.conditionalMenu(userType)}
                </ul>
            </div>
        </nav>
    )
}
}


export default SideBar