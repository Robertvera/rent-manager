import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import rentManagerApi from '../../../../api/api-client'
import { PlusCircle, PlusSquare } from 'react-feather';
import swal from 'sweetalert2'
import moment from 'moment'

class AdminEditOwners extends Component {

    constructor(props) {
        super(props)
        this.state = {
            owner: ''

        }
    }

    componentDidMount = () => {
        rentManagerApi.getOneOwner(this.props.ownerId)
            .then(owner => {
                this.setState({ owner })
            })
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        let owner = { ...this.state.owner };
        owner[name] = value;
        this.setState({ owner });
    }

    updateOwner = () => {
        const { documentId, name, surname, email, phoneNumber, nationality, bankAccount } = this.state.owner
        rentManagerApi.updateOwner(documentId, name, surname, email, phoneNumber, nationality, bankAccount)
            .then(result => {
                if (result.status === 'OK') {
                    swal({
                        title: 'Owner updated!',
                        type: 'success',
                        showConfirmButton: false,
                        timer: 2500,
                        onOpen: () => {
                            swal.showLoading()
                        }
                    })
                } else {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                }
            })

    }

    render() {

        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        {/* OWNER */}
                        {this.state.owner ?
                            <form className="col-7 p-0">
                                <div className="container-fluid p-0">
                                    <div className="row">
                                        {/* NAME, SURNAME */}

                                        <div className="form-group col-sm-12 col-md-6 col-lg-6">
                                            <label htmlFor="name">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                placeholder="Name"
                                                defaultValue={this.state.owner.name}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="form-group col-sm-12 col-md-6 col-lg-6">
                                            <label htmlFor="surname">Surname</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="surname"
                                                name="surname"
                                                placeholder="Surname"
                                                defaultValue={this.state.owner.surname}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        {/* ID, NATIONALITY */}
                                        <div className="form-group col-sm-12 col-md-6 col-lg-6">
                                            <label htmlFor="passport">ID/Passport</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="passport"
                                                name="documentId"
                                                placeholder="ID/Passport"
                                                defaultValue={this.state.owner.documentId}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="form-group col-sm-12 col-md-6 col-lg-6">
                                            <label htmlFor="nationality">Nationality</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="nationality"
                                                name="nationality"
                                                placeholder="Nationality"
                                                defaultValue={this.state.owner.nationality}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        {/* TELEPHONE, EMAIL */}
                                        <div className="form-group col-sm-12 col-md-6 col-lg-6">
                                            <label htmlFor="telephone">Telephone</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="telephone"
                                                name="phoneNumber"
                                                placeholder="Telephone"
                                                defaultValue={this.state.owner.phoneNumber}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="form-group col-sm-12 col-md-6 col-lg-6">
                                            <label htmlFor="email">e-mail</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="example@email.com"
                                                defaultValue={this.state.owner.email}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        {/* BANK ACCOUNT, PROPERTIES */}
                                        <div className="form-group col-sm-12 col-md-6 col-lg-6">
                                            <label htmlFor="bank-account">Bank account</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="bank-account"
                                                name="bankAccount"
                                                placeholder="Bank Account"
                                                defaultValue={this.state.owner.bankAccount}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            : undefined}
                        {/* SAVE BUTTON */}
                        <div className="container-fluid col-7 p-0">
                            <div className="row justify-content-center">
                                <button
                                    type="button"
                                    className="btn btn-danger col-3 mb-5"
                                    onClick={this.updateOwner}
                                >SAVE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        )
    }
}


export default AdminEditOwners