import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import './tenant-overview.css';

class TenantOverview extends Component {
    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="alert alert-danger col-11 text-center" role="alert">
                            You have pending payments
                        </div>
                        <div className="card col-lg-5 col-sm-12 m-3 p-0">
                            <img className="card-img-top" src="../img/apartment.jpg" alt="Card image cap" />
                            <div className="card-body pt-5">
                                <h6 className="card-title text-center">PROPERTY</h6>
                                <p className="card-text text-center">Pl. Catalunya 10, 2º 2ª 08001 Barcelona</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12 col-md-12 p-0 m-3">
                            <div className="card col-12">
                                <div className="card-body">
                                    <h6 className="card-title text-center">
                                        TENANTS
                                    </h6>
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">ID</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mark Otto</td>
                                                <td>452456345</td>
                                            </tr>
                                            <tr>
                                                <td>Jacob Thornton</td>
                                                <td>453452345</td>
                                            </tr>
                                            <tr>
                                                <td>Larry the Bird</td>
                                                <td>8347509384</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card col-12 my-3">
                                <div className="card-body">
                                    <h6 className="card-title text-center">RENTAL PRICE</h6>
                                    <p className="card-text numbers text-center">1.200 €/mo</p>
                                </div>
                            </div>
                            <div className="card col-12 my-3">
                                <div className="card-body">
                                    <h6 className="card-title text-center">DEPOSIT</h6>
                                    <p className="card-text numbers text-center">2.400 €</p>
                                </div>
                            </div>
                            <div className="card col-12">
                                <div className="card-body">
                                    <h6 className="card-title text-center">LEASE ID</h6>
                                    <p className="card-text text-center">ref: 9374983749582</p>
                                </div>
                            </div>
                        </div>
                        <div className="card col-12 col-lg-5 col-md-5 mx-3 mb-5" id="starting-date">
                            <div className="card-body">
                                <h6 className="card-title text-center">STARTING DATE</h6>
                                <p className="card-text numbers text-center">24/09/1999</p>
                            </div>
                        </div>
                        <div className="card col-12 col-lg-5 col-md-5 mx-3 mb-5" id="ending-date">
                            <div className="card-body">
                                <h6 className="card-title text-center">ENDING DATE</h6>
                                <p className="card-text numbers text-center">24/12/2000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        )
    }
}


export default TenantOverview