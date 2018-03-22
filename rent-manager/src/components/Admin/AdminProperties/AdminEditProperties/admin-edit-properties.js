import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import rentManagerApi from '../../../../api/api-client'

class AdminEditProperties extends Component {

    constructor(props) {
        super(props)
        this.state = {
            property: '',
            owners: ''
        }
    }

    componentDidMount = () => {
        rentManagerApi.getOneProperty(this.props.propertyId)
            .then(property => {
                this.setState({property})
            })

        rentManagerApi.getOwners()
            .then(owners => {
                this.setState({owners})
            })
    }

    render() {

        return (
            
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
            { this.state.property ?
                <div className="container-fluid edit-apartments-module">
                    <div className="row mt-5">
                        <div className="col-lg-5 col-sm-12 mb-5">
                            <form className="col-12 p-0">
                                <div className="form-group">
                                    <label htmlFor="property">Property</label>
                                    <input type="text" className="form-control" id="property" placeholder="Property" defaultValue = {this.state.property.reference} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="Address" defaultValue={this.state.property.address} required />
                                </div>
                                <div className="container p-0">
                                    <div className="row justify-content-around">
                                        <div className="form-group col-12 col-lg-3 p-0">
                                            <label htmlFor="rooms">Rooms</label>
                                            <input type="number" className="form-control" id="rooms" placeholder="Rooms" defaultValue={this.state.property.rooms} />
                                        </div>
                                        <div className="form-group col-12 col-lg-3 p-0">
                                            <label htmlFor="rooms">Square meters</label>
                                            <input type="number" className="form-control" id="sqm" placeholder="Square meters" defaultValue={this.state.property.sqm} />
                                        </div>
                                        <div className="form-group col-12 col-lg-4 p-0">
                                            <label htmlFor="credit-card">Neighbourhood</label>
                                            <select className="custom-select" name="neighbourhood" defaultValue={this.state.property.neighbourhood}>
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
                                        <select className="custom-select" name="owner" defaultValue={this.state.property.owner.documentId}>
                                            {this.state.owners.map(owner => {
                                                return <option value={owner.documentId}>{owner.name} {owner.surname}</option>
                                            })}                                                                                        
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
                :undefined}
            </main>
            




        )
    }
}


export default AdminEditProperties