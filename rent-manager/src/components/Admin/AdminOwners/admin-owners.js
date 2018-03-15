import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import { Trash2, Edit } from 'react-feather'
import './admin-owners.css';

class AdminOwners extends Component {
    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid leases-module">
                    <div className="row justify-content-center">
                        {/* FILTERS */}
                        <div className="card col-10 py-3">
                            <div className="container-fluid">
                                <div className="row justify-content-between">
                                    <input type="text" className="form-control col-lg-2 col-md-5 col-sm-12" placeholder="Search by name/mail/property" />
                                    <div className="col-lg-2 col-md-12 col-sm-12 p-0 mx-3">
                                        <NavLink to="owners/add"><button type="button" className="btn btn-success">+ Add new owner</button></NavLink>
                                    </div>
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
                                            <th scope="col">BANK ACCOUNT</th>
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mark Owner</td>
                                            <td>owner@email.com</td>
                                            <td>687 456 333</td>
                                            <td>GUARDIA 1, GUARDIA 3</td>
                                            <td>ES22 0001 9389 3778 8939 2323</td>
                                            <td className="pointer-cursor">
                                                <Edit />&nbsp;&nbsp;&nbsp;&nbsp;<Trash2 />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Mark Owner</td>
                                            <td>owner@email.com</td>
                                            <td>687 456 333</td>
                                            <td>GUARDIA 1, GUARDIA 3</td>
                                            <td>ES22 0001 9389 3778 8939 2323</td>
                                            <td className="pointer-cursor">
                                                <Edit />&nbsp;&nbsp;&nbsp;&nbsp;<Trash2 />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Mark Owner</td>
                                            <td>owner@email.com</td>
                                            <td>687 456 333</td>
                                            <td>GUARDIA 1, GUARDIA 3</td>
                                            <td>ES22 0001 9389 3778 8939 2323</td>
                                            <td className="pointer-cursor">
                                                <Edit />&nbsp;&nbsp;&nbsp;&nbsp;<Trash2 />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Mark Owner</td>
                                            <td>owner@email.com</td>
                                            <td>687 456 333</td>
                                            <td>GUARDIA 1, GUARDIA 3</td>
                                            <td>ES22 0001 9389 3778 8939 2323</td>
                                            <td className="pointer-cursor">
                                                <Edit />&nbsp;&nbsp;&nbsp;&nbsp;<Trash2 />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Mark Owner</td>
                                            <td>owner@email.com</td>
                                            <td>687 456 333</td>
                                            <td>GUARDIA 1, GUARDIA 3</td>
                                            <td>ES22 0001 9389 3778 8939 2323</td>
                                            <td className="pointer-cursor">
                                                <Edit />&nbsp;&nbsp;&nbsp;&nbsp;<Trash2 />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Mark Owner</td>
                                            <td>owner@email.com</td>
                                            <td>687 456 333</td>
                                            <td>GUARDIA 1, GUARDIA 3</td>
                                            <td>ES22 0001 9389 3778 8939 2323</td>
                                            <td className="pointer-cursor">
                                                <Edit />&nbsp;&nbsp;&nbsp;&nbsp;<Trash2 />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Mark Owner</td>
                                            <td>owner@email.com</td>
                                            <td>687 456 333</td>
                                            <td>GUARDIA 1, GUARDIA 3</td>
                                            <td>ES22 0001 9389 3778 8939 2323</td>
                                            <td className="pointer-cursor">
                                                <Edit />&nbsp;&nbsp;&nbsp;&nbsp;<Trash2 />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Mark Owner</td>
                                            <td>owner@email.com</td>
                                            <td>687 456 333</td>
                                            <td>GUARDIA 1, GUARDIA 3</td>
                                            <td>ES22 0001 9389 3778 8939 2323</td>
                                            <td className="pointer-cursor">
                                                <Edit />&nbsp;&nbsp;&nbsp;&nbsp;<Trash2 />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Mark Owner</td>
                                            <td>owner@email.com</td>
                                            <td>687 456 333</td>
                                            <td>GUARDIA 1, GUARDIA 3</td>
                                            <td>ES22 0001 9389 3778 8939 2323</td>
                                            <td className="pointer-cursor">
                                                <Edit />&nbsp;&nbsp;&nbsp;&nbsp;<Trash2 />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Mark Owner</td>
                                            <td>owner@email.com</td>
                                            <td>687 456 333</td>
                                            <td>GUARDIA 1, GUARDIA 3</td>
                                            <td>ES22 0001 9389 3778 8939 2323</td>
                                            <td className="pointer-cursor">
                                                <Edit />&nbsp;&nbsp;&nbsp;&nbsp;<Trash2 />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Mark Owner</td>
                                            <td>owner@email.com</td>
                                            <td>687 456 333</td>
                                            <td>GUARDIA 1, GUARDIA 3</td>
                                            <td>ES22 0001 9389 3778 8939 2323</td>
                                            <td className="pointer-cursor">
                                                <Edit />&nbsp;&nbsp;&nbsp;&nbsp;<Trash2 />
                                            </td>
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


export default AdminOwners