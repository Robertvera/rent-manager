import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import './admin-dashboard.css';

class AdminDashboard extends Component {
    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="card col-lg-12 col-md-12 m-3">
                            <div className="card-title">
                                <h4 className="text-center pt-3">PENDING PAYMENTS</h4>
                            </div>
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">PROPERTY</th>
                                            <th scope="col">LEASE</th>
                                            <th scope="col">CONCEPT</th>
                                            <th scope="col">AMOUNT</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>GUARDIA 4</td>
                                            <td>0001</td>
                                            <td>January 2017 rent</td>
                                            <td>1.100 €</td>
                                        </tr>
                                        <tr>
                                            <td>LANCASTER</td>
                                            <td>0001</td>
                                            <td>February 2017 rent</td>
                                            <td>1.200 €</td>
                                        </tr>
                                        <tr>
                                            <td>SANT PAU</td>
                                            <td>0001</td>
                                            <td>March 2017 rent</td>
                                            <td>1.500 €</td>
                                        </tr>
                                        <tr>
                                            <td>LLEONA</td>
                                            <td>0001</td>
                                            <td>April 2017 rent</td>
                                            <td>1.500 €</td>
                                        </tr>
                                        <tr>
                                            <td>BOT</td>
                                            <td>0001</td>
                                            <td>May 2017 rent</td>
                                            <td>1.500 €</td>
                                        </tr>
                                        <tr>
                                            <td>MOLES</td>
                                            <td>0001</td>
                                            <td>June 2017 rent</td>
                                            <td>1.500 €</td>
                                        </tr>
                                        <tr>
                                            <td>ROCA 1</td>
                                            <td>0001</td>
                                            <td>July 2017 rent</td>
                                            <td>1.500 €</td>
                                        </tr>
                                        <tr>
                                            <td>GUARDIA 3</td>
                                            <td>0001</td>
                                            <td>August 2017 rent</td>
                                            <td>1.500 €</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 d-flex flex-row flex-nowrap p-0 mb-5">
                            <div className="card w-50 mr-lg-2">
                                <div className="card-title">
                                    <h4 className="text-center pt-3">VACANT PROPERTIES</h4>
                                </div>
                                <div className="card-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">PROPERTY</th>
                                                <th scope="col">SINCE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>GUARDIA 4</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>LANCASTER</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>SANT PAU</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>LLEONA</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>BOT</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>MOLES</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>ROCA 1</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>GUARDIA 3</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card w-50 ml-lg-2">
                                <div className="card-title">
                                    <h4 className="text-center pt-3">LEASES ENDING SOON</h4>
                                </div>
                                <div className="card-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">PROPERTY</th>
                                                <th scope="col">SINCE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>GUARDIA 4</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>LANCASTER</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>SANT PAU</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>LLEONA</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>BOT</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>MOLES</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>ROCA 1</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>GUARDIA 3</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        )
    }
}


export default AdminDashboard