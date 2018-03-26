import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import './admin-add-payments.css';
import rentManagerApi from '../../../../api/api-client'

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

    handleChangeLease = (e) => {
        let { name, value } = e.target;
        let lease = { ...this.state.lease };
        lease[name] = value;
        this.setState({ lease });
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
                                            onChange={this.handleChangeLease}
                                            >
                                            <option value="">Select a property</option>
                                            {this.state.properties.map(property => {
                                                return <option value={property._id}>{property.reference}</option>
                                            })}
                                        </select>
                                    </div>
                                    {/* CONCEPT, CHECKBOX */}
                                    <div className="form-group col-10">
                                        <label htmlFor="concept">Concept</label>
                                        <input type="text" className="form-control" id="concept" placeholder="Concept" defaultValue />
                                    </div>
                                    <div className="pt-5 col-2">
                                        <input type="checkbox" />
                                        <label htmlFor="checkbox">Booking fee?</label>
                                    </div>
                                    {/* DUE DATE, PRICE, STATUS */}
                                    <div className="form-group col-sm-12 col-md-6 col-lg-4">
                                        <label htmlFor="due-date">Due date</label>
                                        <input type="text" className="form-control" id="due-date" placeholder="Due date" defaultValue="25/08/1998" />
                                    </div>
                                    <div className="form-group col-sm-12 col-md-6 col-lg-4">
                                        <label htmlFor="price">Price</label>
                                        <input type="text" className="form-control" id="price" placeholder="Price" defaultValue="2.000 €" />
                                    </div>
                                    <div className="form-group col-sm-12 col-md-6 col-lg-4">
                                        <label htmlFor="status">Status</label>
                                        <select className="custom-select" name="status">
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
                                <button type="button" className="btn btn-danger col-3 mb-5">SAVE</button>
                            </div>
                        </div>
                    </div>
                    </div>
                    :undefined}
                    </main>



        )
    }
}


export default AdminAddPayments