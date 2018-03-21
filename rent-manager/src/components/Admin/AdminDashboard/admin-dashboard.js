import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import PendingPayments from './PendingPayments/pending-payments';
import VacantProperties from './VacantProperties/vacant-properties'
import LeasesEnding from './LeasesEnding/leases-ending';

class AdminDashboard extends Component {
    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <PendingPayments />
                        <div className="col-lg-12 col-md-12 d-flex flex-row flex-nowrap p-0 mb-5">
                            <VacantProperties />
                            <LeasesEnding />
                        </div>

                    </div>
                </div>
            </main>


        )
    }
}


export default AdminDashboard