import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import './admin-add-owners.css';
import rentManagerApi from '../../../../api/api-client'
import swal from 'sweetalert2'

class AdminAddOwners extends Component {

    constructor(props) {
        super(props)
        this.state = {
          owner: ''
        }
      }


    handleChange = (e) => {
        let { name, value } = e.target;
        let owner = { ...this.state.owner };
        owner[name] = value;
        this.setState({ owner });
    }

    createOwner = () => {
        const { name, surname, documentId, nationality, phoneNumber, email, bankAccount} = this.state.owner
        rentManagerApi.createOwner(documentId, name, surname, email, phoneNumber, nationality, bankAccount)
            .then(results => {
                if(results.status === 'OK') {
                    swal({
                        title: 'Owner created!',
                        text: 'You are being redirected',
                        type: 'success',
                        showConfirmButton: false,
                        timer: 2500,
                        onOpen: () => {
                          swal.showLoading()
                        }
                      })
                      .then(()=>{
                        this.props.history.push("/back/admin/owners")
                      })
                    } else {
                      swal({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                      })
                    }
                }
            )}
    

    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        {/* OWNER */}
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
                                        onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* SAVE BUTTON */}
                        <div className="container-fluid col-7 p-0">
                            <div className="row justify-content-center">
                                <button 
                                type="button" 
                                className="btn btn-danger col-3 mb-5"
                                onClick={this.createOwner}
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


export default withRouter(AdminAddOwners)