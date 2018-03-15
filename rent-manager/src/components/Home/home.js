import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import './home.css';

class Home extends Component {
    render() {
        return (
            <main role="main">
                {/* JUMBOTRON */}
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Rent Manager</h1>
                        <p className="lead">Tenant, administrator and owner <strong>happy together</strong>
                        </p>
                    </div>
                </div>
                {/* FEATURED */}
                <div className="container mb-5">
                    <div className="row">
                        <section className="col-lg-4 col-md-4 col-sm-12 mb-4">
                            <div className="d-flex flex-column justify-content-between profile">
                                <img className="rounded-circle mx-auto d-block" src="./img/tenant-s.jpg" alt="Tenants" width={140} height={140} />
                                <h2>TENANT</h2>
                                <p className="text-justify text-center">Follow up your lease contract and payments. Pay your rent
            <strong>fast</strong> and
            <strong>safe</strong>.</p>
                                <NavLink className="btn btn-danger mx-auto" href="#" role="button" to="/back/tenant/overview">Log in as tenant »</NavLink>
                            </div>
                        </section>
                        <section className="col-lg-4 col-md-4 col-sm-12 mb-4">
                            <div className="d-flex flex-column justify-content-between profile">
                                <img className="rounded-circle mx-auto d-block" src="./img/admin-s.jpg" alt="Admin" width={140} height={140} />
                                <h2>ADMINISTRATOR</h2>
                                <p className="text-justify text-center">Manage your properties, payments and clients from the same place. With
            <strong>Rent Manager</strong> everything is under control.</p>
                                <NavLink className="btn btn-danger mx-auto" href="#" role="button" to="/back/admin/overview">Log in as admin »</NavLink>
                            </div>
                        </section>
                        <section className="col-lg-4 col-md-4 col-sm-12 mb-4">
                            <div className="d-flex flex-column justify-content-between profile">
                                <img className="rounded-circle mx-auto d-block" src="./img/owner-s.jpg" alt="Owner" width={140} height={140} />
                                <h2>OWNER</h2>
                                <p className="text-justify text-center">Be informed of everything related to your property,
            <strong>misunderstandings are over.</strong>
                                </p>
                                <NavLink className="btn btn-danger mx-auto" href="#" role="button" to="/back/owner/overview">Log in as owner »</NavLink>
                            </div>
                        </section>
                    </div>
                </div>
                {/* FOOTER */}
                <footer className="container">
                    <small><p className="float-right">
                        Developed by <a href="https://github.com/Robertvera/">Robert</a>
                    </p></small>
                    <small><p>© 2017-2018 Rent Manager, all rights reserved ·
        <a href="#">Privacy</a> ·
        <a href="#">Terms</a>
                    </p></small>
                </footer>
            </main>

        )
    }
}


export default Home