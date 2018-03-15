import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import './admin-tenants.css';

class AdminTenants extends Component {
    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid leases-module">
                    <div className="row justify-content-center">
                        {/* FILTERS */}
                        <div className="card col-4 py-3">
                            <div className="container-fluid">
                                <div className="row">
                                    <input type="text" className="form-control col-lg-12 col-md-12 col-sm-12" placeholder="Search by property/concept" />
                                </div>
                            </div>
                        </div>
                        {/* LIST */}
                        <div className="card col-lg-10 col-md-10 m-3">
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">NAME</th>
                                            <th scope="col">E-MAIL</th>
                                            <th scope="col">TELEPHONE NUMBER</th>
                                            <th scope="col">PROPERTY</th>
                                            <th scope="col">LEASE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mark Price</td>
                                            <td>price@email.com</td>
                                            <td>687 456 333</td>
                                            <td>GUARDIA 1</td>
                                            <td>00001</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Mark Price</td>
                                            <td>price@email.com</td>
                                            <td>687 456 333</td>
                                            <td>GUARDIA 1</td>
                                            <td>00001</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Mark Price</td>
                                            <td>price@email.com</td>
                                            <td>687 456 333</td>
                                            <td>GUARDIA 1</td>
                                            <td>00001</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Mark Price</td>
                                            <td>price@email.com</td>
                                            <td>687 456 333</td>
                                            <td>GUARDIA 1</td>
                                            <td>00001</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Mark Price</td>
                                            <td>price@email.com</td>
                                            <td>687 456 333</td>
                                            <td>GUARDIA 1</td>
                                            <td>00001</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Mark Price</td>
                                            <td>price@email.com</td>
                                            <td>687 456 333</td>
                                            <td>GUARDIA 1</td>
                                            <td>00001</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Mark Price</td>
                                            <td>price@email.com</td>
                                            <td>687 456 333</td>
                                            <td>GUARDIA 1</td>
                                            <td>00001</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Mark Price</td>
                                            <td>price@email.com</td>
                                            <td>687 456 333</td>
                                            <td>GUARDIA 1</td>
                                            <td>00001</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Mark Price</td>
                                            <td>price@email.com</td>
                                            <td>687 456 333</td>
                                            <td>GUARDIA 1</td>
                                            <td>00001</td>
                                            
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


export default AdminTenants