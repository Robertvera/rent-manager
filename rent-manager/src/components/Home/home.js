import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink, Redirect } from 'react-router-dom'
import rentManagerApi from '../../api/api-client'
import Modal from 'react-bootstrap4-modal'
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tenantVisible: false,
            leaseId: '',
            leasePassword: '',
            loggedIn: null
        }

    }
    sendUserType = (type) => {
        this.props.onClickButton(type)
        sessionStorage.setItem('userType', (type))
    }

    openModal = () => {
        this.setState(
            {
                tenantVisible: true,
            }
        )
    }

    modalClose = () => {
        this.setState(
            { tenantVisible: false }
        )
    }

    keepLeaseId = leaseId => this.setState({ leaseId })

    keepLeasePassword = leasePassword => this.setState({ leasePassword })

    tenantLogin = (leaseId, password) => {
        return rentManagerApi.checkLogin(leaseId, password)
            .then(data => {
                console.log(data)
                console.log(data.data.status)
                if (data.data.status.toString() === 'OK') {
                    this.storeLeaseId(data)
                    this.setState({ loggedIn: true })
                    this.props.leaseIdHandler(leaseId)
                } else {
                    this.setState({ loggedIn: false })
                }
            })
    }

    storeLeaseId = (lease) => {
        sessionStorage.setItem('leaseId', (lease.data.data._id))

        console.log(sessionStorage)
    }

    loginWarning = () => {
        return <p className="warning">
            Ooops! wrong lease ID and/or password!
                </p>
    }

    render() {

        if (this.state.loggedIn) {
            return <Redirect to="/back/tenant/overview" />
        }

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
                                <p className="text-justify text-center">Follow up your lease contract and payments. Pay your rent fast and safe.</p>
                                <button
                                    className="btn btn-danger mx-auto"
                                    role="button"
                                    onClick={(e) => { e.preventDefault; this.sendUserType('tenant'); this.openModal() }}
                                >
                                    Log in as tenant »
                                </button>
                            </div>
                        </section>
                        <section className="col-lg-4 col-md-4 col-sm-12 mb-4">
                            <div className="d-flex flex-column justify-content-between profile">
                                <img className="rounded-circle mx-auto d-block" src="./img/admin-s.jpg" alt="Admin" width={140} height={140} />
                                <h2>ADMINISTRATOR</h2>
                                <p className="text-justify text-center">Manage your properties, payments and clients from the same place. With Rent Manager everything is under control.</p>
                                <NavLink
                                    className="btn btn-danger mx-auto"
                                    role="button"
                                    onClick={(e) => { e.preventDefault; this.sendUserType('admin') }}
                                    to="/back/admin/overview">Log in as admin »</NavLink>
                            </div>
                        </section>
                        <section className="col-lg-4 col-md-4 col-sm-12 mb-4">
                            <div className="d-flex flex-column justify-content-between profile">
                                <img className="rounded-circle mx-auto d-block" src="./img/owner-s.jpg" alt="Owner" width={140} height={140} />
                                <h2>OWNER</h2>
                                <p className="text-justify text-center">Be informed of everything related to your property, misunderstandings are over.
                                </p>
                                <NavLink
                                    className="btn btn-danger mx-auto"
                                    role="button"
                                    onClick={(e) => { e.preventDefault; this.sendUserType('owner') }}
                                    to="/back/owner/overview">Log in as owner »</NavLink>
                            </div>
                        </section>
                    </div>
                </div>
                {/* MODAL */}

                <Modal visible={this.state.tenantVisible} onClickBackdrop={(e) => { e.preventDefault; this.modalClose() }}>
                    <div className="modal-header">
                        <h5 className="modal-title">Tenant Log in</h5>
                    </div>
                    <div className="modal-body">
                        <p>In order to log in, please insert your lease ID and password:</p>
                        <form>
                            <div className="form-group">
                                <input
                                    type="username"
                                    className="form-control"
                                    id="inputLeaseId"
                                    placeholder="Lease ID"
                                    onChange={(e) => this.keepLeaseId(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    placeholder="Password"
                                    onChange={(e) => this.keepLeasePassword(e.target.value)}
                                />
                            </div>
                            {this.state.loggedIn == false ? this.loginWarning() : null}
                                <button
                                    role="button"
                                    className="btn btn-success"
                                    onClick={(e) => {
                                        e.preventDefault;
                                        this.tenantLogin(this.state.leaseId, this.state.leasePassword)
                                    }}
                                >
                                    Log in
                                </button>
                        </form>
                    </div>

                </Modal>

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