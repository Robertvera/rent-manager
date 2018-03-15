import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import './tenant-overview.css';
import AlertMessage from './AlertMessage/alert-message.js'
import PropertyBox from './PropertyBox/property-box'
import TenantList from './TenantList/tenant-list'
import RentalPrice from './RentalPrice/rental-price'
import Deposit from './Deposit/deposit'
import LeaseID from './LeaseID/lease-id'
import LeaseStarting from './LeaseStarting/lease-starting'
import LeaseEnding from './LeaseEnding/lease-ending'

class TenantOverview extends Component {
    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <AlertMessage />
                        <PropertyBox />
                        <div className="col-lg-5 col-sm-12 col-md-12 p-0 m-3">
                            <TenantList />
                            <RentalPrice />
                            <Deposit />
                            <LeaseID />                            
                        </div>
                        <LeaseStarting />
                        <LeaseEnding />
                    </div>
                </div>
            </main>

        )
    }
}


export default TenantOverview