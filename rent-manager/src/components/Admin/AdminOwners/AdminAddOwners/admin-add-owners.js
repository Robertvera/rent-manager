import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import './admin-add-owners.css';

class AdminAddOwners extends Component {
    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        {/* TENANT */}
                        <form className="col-7 p-0">
                            <div className="container-fluid p-0">
                                <div className="row">
                                    {/* NAME, SURNAME */}
                                    <div className="form-group col-sm-12 col-md-6 col-lg-6">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Name" defaultValue />
                                    </div>
                                    <div className="form-group col-sm-12 col-md-6 col-lg-6">
                                        <label htmlFor="surname">Surname</label>
                                        <input type="text" className="form-control" id="surname" placeholder="Surname" defaultValue />
                                    </div>
                                    {/* ID, NATIONALITY */}
                                    <div className="form-group col-sm-12 col-md-6 col-lg-6">
                                        <label htmlFor="passport">ID/Passport</label>
                                        <input type="text" className="form-control" id="passport" placeholder="ID/Passport" defaultValue />
                                    </div>
                                    <div className="form-group col-sm-12 col-md-6 col-lg-6">
                                        <label htmlFor="nationality">Nationality</label>
                                        <input type="text" className="form-control" id="nationality" placeholder="Nationality" defaultValue />
                                    </div>
                                    {/* TELEPHONE, EMAIL */}
                                    <div className="form-group col-sm-12 col-md-6 col-lg-6">
                                        <label htmlFor="telephone">Telephone</label>
                                        <input type="text" className="form-control" id="telephone" placeholder="Telephone" defaultValue />
                                    </div>
                                    <div className="form-group col-sm-12 col-md-6 col-lg-6">
                                        <label htmlFor="email">e-mail</label>
                                        <input type="text" className="form-control" id="email" placeholder="example@email.com" defaultValue />
                                    </div>
                                    {/* BANK ACCOUNT, PROPERTIES */}
                                    <div className="form-group col-sm-12 col-md-6 col-lg-6">
                                        <label htmlFor="bank-account">Bank account</label>
                                        <input type="text" className="form-control" id="bank-account" placeholder="Bank Account" defaultValue />
                                    </div>
                                    <div className="form-group col-sm-12 col-md-6 col-lg-6">
                                        <label htmlFor="credit-card">Properties</label>
                                        <select className="custom-select" name="properties" multiple>
                                            <option value="guardia1">GUARDIA 1</option>
                                            <option value="guardia2">AUARDIA 2</option>
                                            <option value="guardia3">GUARDIA 3</option>
                                            <option value="guardia4">GUARDIA 4</option>
                                            <option value="guardia5">GUARDIA 5</option>
                                            <option value="guardia6">RUARDIA 6</option>
                                            <option value="guardia7">GUARDIA 7</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* SAVE BUTTON */}
                        <div className="container-fluid col-7 p-0">
                            <div className="row justify-content-center">
                                <button type="button" className="btn btn-danger col-3 mb-5">SAVE</button>
                            </div>
                        </div>
                    </div>
                    </div>
                    </main>
        )
    }
}


export default AdminAddOwners