import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import './owner-overview.css';

class OwnerOverview extends Component {
    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid apartments-module mb-5">
                    <div className="row justify-content-center">
                        <div className="card col-lg-3 col-md-5 col-sm-12 p-0">
                            <img className="card-img-top p-0" src="../img/apartment.jpg" alt="Card image cap" />
                            <div className="info-card">
                                <div className="card-body">
                                    <h5 className="card-title">VALENCIA I
                                <div className="red-dot">
                                        </div></h5>
                                    <div className="card-text">
                                        <p>Price: 1.200 €/mo</p>
                                        <p>Price: 1.200 €/mo</p>
                                        <p>Starting: 22/02/1990</p>
                                        <p>Ending: 22/05/1990</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card col-lg-3 col-md-5 col-sm-12 p-0">
                            <img className="card-img-top p-0" src="../img/apartment.jpg" alt="Card image cap" />
                            <div className="info-card">
                                <div className="card-body">
                                    <h5 className="card-title">GUARDIA I
                                    <div className="red-dot">
                                        </div></h5>
                                    <div className="card-text">
                                        <p>Price: 1.200 €/mo</p>
                                        <p>Price: 1.200 €/mo</p>
                                        <p>Starting: 22/02/1990</p>
                                        <p>Ending: 22/05/1990</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card col-lg-3 col-md-5 col-sm-12 p-0">
                            <img className="card-img-top p-0" src="../img/apartment.jpg" alt="Card image cap" />
                            <div className="info-card">
                                <div className="card-body">
                                    <h5 className="card-title">LANCASTER
                                    <div className="green-dot">
                                        </div></h5>
                                    <div className="card-text">
                                        <p>Price: 1.200 €/mo</p>
                                        <p>Price: 1.200 €/mo</p>
                                        <p>Starting: 22/02/1990</p>
                                        <p>Ending: 22/05/1990</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        )
    }
}


export default OwnerOverview