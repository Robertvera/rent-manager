import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import { Maximize2, User } from 'react-feather'
import './admin-properties.css';

class AdminProperties extends Component {
    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid apartments-module mb-5">
                    <div className="row justify-content-center">

                        {/* FILTERS */}
                        <div className="card col-12 py-3">
                            <div className="container-fluid">
                                <div className="row justify-content-between">
                                    <select className="custom-select col-lg-2 col-md-5 col-sm-12" name="status">
                                        <option value="vacant">Vacant</option>
                                        <option value="occupied">Occupied</option>
                                    </select>                                    
                                    <select className="custom-select col-lg-2 col-md-5 col-sm-12" name="ending-date">
                                        <option value="barceloneta">Barceloneta</option>
                                        <option value="born">Born</option>
                                        <option value="eixample">Eixample</option>
                                        <option value="gothic">Gothic</option>
                                        <option value="gracia">Gràcia</option>
                                        <option value="poble-nou">Poble Nou</option>
                                        <option value="raval">Raval</option>
                                    </select>
                                    <input type="text" className="form-control col-lg-2 col-md-5 col-sm-12" placeholder="Search by property" />
                                    <div className="col-lg-2 col-md-12 col-sm-12 p-0">
                                        <NavLink to="properties/add"><button type="button" className="btn btn-success">+ Add new property</button></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* LIST */}
                        <div className="card col-lg-3 col-md-5 col-sm-12 p-0">
                            <img className="card-img-top p-0" src="../img/apartment.jpg" alt="Card image cap" />
                            <div className="info-card">
                                <div className="card-body">
                                    <h5 className="card-title">VALENCIA I <div className="red-dot" /></h5>
                                    <div className="card-text">
                                        <div className="container-fluid">
                                            <div className="row mb-3 mt-2">
                                                <div className="col-12 p-0 mt-2">Barceloneta</div><div className="col-6 p-0 mt-2">78 <Maximize2 /></div><div className="col-6 p-0">4 <User /></div>
                                                <div className="col-12 p-0 mt-2">
                                                    PRICE: 1.200 €
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <a href="#" className="btn btn-warning">Edit</a>
                                        <a href="#" className="btn btn-danger">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card col-lg-3 col-md-5 col-sm-12 p-0">
                            <img className="card-img-top p-0" src="../img/apartment.jpg" alt="Card image cap" />
                            <div className="info-card">
                                <div className="card-body">
                                    <h5 className="card-title">GUARDIA I <div className="red-dot" /></h5>
                                    <div className="card-text">
                                        <div className="container-fluid">
                                            <div className="row mb-3 mt-2">
                                                <div className="col-12 p-0 mt-2">Barceloneta</div><div className="col-6 p-0 mt-2">78 <Maximize2 /></div><div className="col-6 p-0">4 <User /></div>
                                                <div className="col-12 p-0 mt-2">
                                                    PRICE: 1.200 €
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <NavLink to="properties/add" className="btn btn-warning">Edit</NavLink>
                                        <a href="#" className="btn btn-danger">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card col-lg-3 col-md-5 col-sm-12 p-0">
                            <img className="card-img-top p-0" src="../img/apartment.jpg" alt="Card image cap" />
                            <div className="info-card">
                                <div className="card-body">
                                    <h5 className="card-title">LANCASTER <div className="green-dot" /></h5>
                                    <div className="card-text">
                                        <div className="container-fluid">
                                            <div className="row mb-3 mt-2">
                                                <div className="col-12 p-0 mt-2">Barceloneta</div><div className="col-6 p-0 mt-2">78 <Maximize2 /></div><div className="col-6 p-0">4 <User /></div>
                                                <div className="col-12 p-0 mt-2">
                                                    PRICE: 1.200 €
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <a href="#" className="btn btn-warning">Edit</a>
                                        <a href="#" className="btn btn-danger">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card col-lg-3 col-md-5 col-sm-12 p-0">
                            <img className="card-img-top p-0" src="../img/apartment.jpg" alt="Card image cap" />
                            <div className="info-card">
                                <div className="card-body">
                                    <h5 className="card-title">VALENCIA I <div className="green-dot" /></h5>
                                    <div className="card-text">
                                        <div className="container-fluid">
                                            <div className="row mb-3 mt-2">
                                                <div className="col-12 p-0 mt-2">Barceloneta</div><div className="col-6 p-0 mt-2">78 <Maximize2 /></div><div className="col-6 p-0">4 <User /></div>
                                                <div className="col-12 p-0 mt-2">
                                                    PRICE: 1.200 €
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <a href="#" className="btn btn-warning">Edit</a>
                                        <a href="#" className="btn btn-danger">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card col-lg-3 col-md-5 col-sm-12 p-0">
                            <img className="card-img-top p-0" src="../img/apartment.jpg" alt="Card image cap" />
                            <div className="info-card">
                                <div className="card-body">
                                    <h5 className="card-title mb-0">VALENCIA I <div className="green-dot" /></h5>
                                    <div className="card-text">
                                        <div className="container-fluid">
                                            <div className="row mb-3 mt-2">
                                                <div className="col-12 p-0 mt-2">Barceloneta</div><div className="col-6 p-0 mt-2">78 <Maximize2 /></div><div className="col-6 p-0">4 <User /></div>
                                                <div className="col-12 p-0 mt-2">
                                                    PRICE: 1.200 €
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <a href="#" className="btn btn-warning">Edit</a>
                                        <a href="#" className="btn btn-danger">Delete</a>
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


export default AdminProperties