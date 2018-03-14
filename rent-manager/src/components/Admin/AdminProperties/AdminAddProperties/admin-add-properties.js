import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import './admin-add-properties.css';

class AdminAddProperties extends Component {
    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid edit-apartments-module">
                    <div className="row mt-5">
                        <div className="col-lg-5 col-sm-12 mb-5">
                            <form className="col-12 p-0">
                                <div className="form-group">
                                    <label htmlFor="property">Property</label>
                                    <input type="text" className="form-control" id="property" aria-describedby="property" placeholder="property" defaultValue="GUARDIA I" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="Address" defaultValue="c/ Guardia 10 1º 2ª 08001 Barcelona" />
                                </div>
                                <div className="container p-0">
                                    <div className="row justify-content-around">
                                        <div className="form-group col-12 col-lg-3 p-0">
                                            <label htmlFor="rooms">Rooms</label>
                                            <input type="number" className="form-control" id="rooms" placeholder="Rooms" defaultValue={4} />
                                        </div>
                                        <div className="form-group col-12 col-lg-3 p-0">
                                            <label htmlFor="rooms">Square meters</label>
                                            <input type="number" className="form-control" id="sqm" placeholder="Square meters" defaultValue={80} />
                                        </div>
                                        <div className="form-group col-12 col-lg-4 p-0">
                                            <label htmlFor="credit-card">Neighbourhood</label>
                                            <select className="custom-select" name="neighbourhood">
                                                <option value="barceloneta">Barceloneta</option>
                                                <option value="born">Born</option>
                                                <option value="eixample">Eixample</option>
                                                <option value="gothic">Gothic</option>
                                                <option value="gracia">Gràcia</option>
                                                <option value="poble-nou">Poble Nou</option>
                                                <option value="raval">Raval</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-content-around d-flex">
                                    <div className="form-group col-12 col-lg-10 p-0">
                                        <label htmlFor="credit-card">Owner</label>
                                        <select className="custom-select" name="owner">
                                            <option value="john-doe">John Doe</option>
                                            <option value="brian-lancaster">Brian Lancaster</option>
                                            <option value="donna-summer">Donna Summer</option>
                                            <option value="michelle-obama">Michelle Obama</option>
                                            <option value="doris-burke">Doris Burke</option>
                                            <option value="betty-simmons">Betty Simmons</option>
                                            <option value="bran-stark">Bran Stark</option>
                                        </select>
                                        <div className="col-1 p-0">
                                            <button type="button" className="btn btn-success">+</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="col-12 p-0">
                                <button className="btn btn-danger">SAVE</button>
                            </div>
                        </div>
                        <div className="card col-lg-6 col-sm-12 p-0">
                            <img className="card-img-top upload-image" src="../img/default-image.png" alt="card-img-top" />
                            <a href="#" className="btn btn-success">UPLOAD IMAGE</a>
                        </div>
                    </div>
                </div>
            </main>





        )
    }
}


export default AdminAddProperties