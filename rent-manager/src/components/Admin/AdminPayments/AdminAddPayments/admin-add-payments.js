import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import './admin-add-payments.css';
import rentManagerApi from '../../../../api/api-client'
import swal from 'sweetalert2'

class AdminAddPayments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            payment: '',
            properties: ''

        }
    }

    componentDidMount = () => {
        rentManagerApi.getPropertiesByStatus('busy')
            .then(properties => {
                this.setState({ properties })
            })
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        let payment = { ...this.state.payment };
        payment[name] = value;
        this.setState({ payment });
    }

    createPayment = () => {
        
        const { concept, property, type, status, amount } = this.state.payment
        const dueDate = new Date(this.state.payment.dueDate).toISOString()

        rentManagerApi.getCurrentLeasesByProperty(property)
            .then(lease => {            
            rentManagerApi.createPayment(concept, type, lease._id, property, status, dueDate, null, amount)
            .then(result => {
                if(result.status === 'OK') {
                    swal({
                        title: 'Payment created!',
                        text: 'You are being redirected',
                        type: 'success',
                        showConfirmButton: false,
                        timer: 2500,
                        onOpen: () => {
                          swal.showLoading()
                        }
                      })
                      .then(()=> {
                        this.props.history.push("/back/admin/payments")
                     })
                } else {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                      })
                }
            })
            })

        
    }

    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
            {this.state.properties ?
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <form className="col-7  p-0">
                            <div className="container-fluid p-0">
                                <div className="row">
                                    {/* PROPERTY */}
                                    <div className="form-group col-12">
                                        <label htmlFor="property">Property</label>
                                        <select
                                            className="custom-select col-12"
                                            name="property"
                                            onChange={this.handleChange}
                                            >
                                            <option value="">Select a property</option>
                                            {this.state.properties.map(property => {
                                                return <option value={property._id}>{property.reference}</option>
                                            })}
                                        </select>
                                    </div>
                                    {/* CONCEPT, CHECKBOX */}
                                    <div className="form-group col-9">
                                        <label htmlFor="concept">Concept</label>
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="concept" 
                                        name="concept"
                                        placeholder="Concept" 
                                        onChange={this.handleChange} />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="type">Type</label>
                                        <select 
                                        className="form-control" 
                                        name="type"
                                        onChange={this.handleChange}
                                        >
                                            <option value="">Type</option>
                                            <option value="rent">Rent</option>
                                            <option value="deposit">Deposit</option>
                                            <option value="utilities">Utilities</option>
                                            <option value="agency">Agency Fee</option>
                                            <option value="booking">Booking Fee</option>                                            
                                        </select>
                                        
                                    </div>
                                    {/* DUE DATE, PRICE, STATUS */}
                                    <div className="form-group col-sm-12 col-md-6 col-lg-4">
                                        <label htmlFor="due-date">Due date</label>
                                        <input 
                                        type="date" 
                                        className="form-control" 
                                        id="due-date" 
                                        name="dueDate"
                                        placeholder="Due date"
                                        onChange={this.handleChange}
                                         />
                                    </div>
                                    <div className="form-group col-sm-12 col-md-6 col-lg-4">
                                        <label htmlFor="price">Price</label>
                                        <input 
                                        type="number" 
                                        className="form-control" 
                                        id="price" 
                                        name="amount"
                                        placeholder="Price" 
                                        onChange={this.handleChange}
                                         />
                                    </div>
                                    <div className="form-group col-sm-12 col-md-6 col-lg-4">
                                        <label htmlFor="status">Status</label>
                                        <select 
                                        className="custom-select" 
                                        name="status"
                                        onChange={this.handleChange}
                                        >   
                                            <option value=""> </option>
                                            <option value="paid">Paid</option>
                                            <option value="pending">Pending</option>
                                        </select>
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
                                onClick={this.createPayment}
                                >SAVE</button>
                            </div>
                        </div>
                    </div>
                    </div>
                    :undefined}
                    </main>



        )
    }
}


export default withRouter(AdminAddPayments)