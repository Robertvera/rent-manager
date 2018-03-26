import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink, Redirect, withRouter } from 'react-router-dom'
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
            ownerVisible: false,
            ownerId:'',
            ownerPassword:'',
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

    openModalOwner = () => {
        this.setState(
            {
                ownerVisible: true,
            }
        )
    }

    modalCloseOwner = () => {
        this.setState(
            { ownerVisible: false }
        )
    }

    keepLeaseId = leaseId => this.setState({ leaseId })

    keepLeasePassword = leasePassword => this.setState({ leasePassword })

    keepOwnerId = ownerId => this.setState({ ownerId })

    keepOwnerPassword = ownerPassword => this.setState({ ownerPassword })

    tenantLogin = (leaseId, password) => {
        return rentManagerApi.checkLogin(leaseId, password)
            .then(data => {
                if (data.data.status.toString() === 'OK') {
                    this.storeLeaseId(data)
                    this.setState({ loggedIn: true })
                    this.props.leaseIdHandler(leaseId)
                    this.props.history.push("/back/tenant/overview")
                } else {
                    this.setState({ loggedIn: false })
                }
            })
    }

    storeLeaseId = (lease) => {
        sessionStorage.setItem('leaseId', (lease.data.data._id))

        console.log(sessionStorage)
    }

    ownerLogin = (ownerId, password) => {
        return rentManagerApi.checkLoginOwner(ownerId, password)
            .then(data => {
                if (data.data.status.toString() === 'OK') {
                    this.storeOwnerId(data)
                    this.setState({ loggedIn: true })
                    this.props.ownerIdHandler(ownerId)
                    this.props.history.push("/back/owner/overview")
                } else {
                    this.setState({ loggedIn: false })
                }
            })
    }

    storeOwnerId = (owner) => {
        sessionStorage.setItem('ownerId', (owner.data.data.documentId))

        console.log(sessionStorage)
    }

    loginWarning = () => {
        return <p className="warning">
            Ooops! wrong lease ID and/or password!
                </p>
    }

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
                                <button
                                    className="btn btn-danger mx-auto"
                                    role="button"
                                    onClick={(e) => { e.preventDefault; this.sendUserType('owner'); this.openModalOwner() }}
                                    >Log in as owner »</button>
                            </div>
                        </section>
                    </div>
                </div>
                {/* MODAL TENANT*/}

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

                {/* MODAL OWNER*/}

                <Modal visible={this.state.ownerVisible} onClickBackdrop={(e) => { e.preventDefault; this.modalCloseOwner() }}>
                    <div className="modal-header">
                        <h5 className="modal-title">Owner Log in</h5>
                    </div>
                    <div className="modal-body">
                        <p>In order to log in, please insert your ID and password:</p>
                        <form>
                            <div className="form-group">
                                <input
                                    type="username"
                                    className="form-control"
                                    id="inputLeaseId"
                                    placeholder="ID"
                                    onChange={(e) => this.keepOwnerId(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    placeholder="Password"
                                    onChange={(e) => this.keepOwnerPassword(e.target.value)}
                                />
                            </div>
                            {this.state.loggedIn == false ? this.loginWarning() : null}
                                <button
                                    role="button"
                                    className="btn btn-success"
                                    onClick={(e) => {
                                        e.preventDefault;
                                        this.ownerLogin(this.state.ownerId, this.state.ownerPassword)
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


export default withRouter(Home)