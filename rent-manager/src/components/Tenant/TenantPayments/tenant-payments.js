import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import './tenant-payments.css';

class TenantPayments extends Component {
    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="card col-lg-10 m-3">
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">CONCEPT</th>
                                            <th scope="col">DUE DATE</th>
                                            <th scope="col">DATE OF PAYMENT</th>
                                            <th scope="col">STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>January 2017 rent</td>
                                            <td>01/01/2017</td>
                                            <td>05/01/2017</td>
                                            <td><a href="#" className="badge badge-success">Paid</a></td>
                                        </tr>
                                        <tr>
                                            <td>February 2017 rent</td>
                                            <td>01/02/2017</td>
                                            <td> - </td>
                                            <td><NavLink href="#" className="badge badge-danger" to="/back/tenant/checkout">Click to pay</NavLink></td>
                                        </tr>
                                        <tr>
                                            <td>March 2017 rent</td>
                                            <td>01/03/2017</td>
                                            <td> - </td>
                                            <td><a href="#" className="badge badge-danger">Click to pay</a></td>
                                        </tr>
                                        <tr>
                                            <td>April 2017 rent</td>
                                            <td>01/04/2017</td>
                                            <td> - </td>
                                            <td><a href="#" className="badge badge-danger">Click to pay</a></td>
                                        </tr>
                                        <tr>
                                            <td>May 2017 rent</td>
                                            <td>01/05/2017</td>
                                            <td> - </td>
                                            <td><a href="#" className="badge badge-danger">Click to pay</a></td>
                                        </tr>
                                        <tr>
                                            <td>June 2017 rent</td>
                                            <td>01/06/2017</td>
                                            <td> - </td>
                                            <td><a href="#" className="badge badge-danger">Click to pay</a></td>
                                        </tr>
                                        <tr>
                                            <td>July 2017 rent</td>
                                            <td>01/07/2017</td>
                                            <td> - </td>
                                            <td><a href="#" className="badge badge-danger">Click to pay</a></td>
                                        </tr>
                                        <tr>
                                            <td>August 2017 rent</td>
                                            <td>01/08/2017</td>
                                            <td> - </td>
                                            <td><a href="#" className="badge badge-danger">Click to pay</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>



        )
    }
}


export default TenantPayments