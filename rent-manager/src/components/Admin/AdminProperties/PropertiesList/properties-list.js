import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink, withRouter, Redirect } from 'react-router-dom'
import { Maximize2, User } from 'react-feather'
import './properties-list.css';
import rentManagerApi from '../../../../api/api-client'
import swal from 'sweetalert2'

class PropertiesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            properties: []

        }
    }

    componentDidMount = () => {
        rentManagerApi.getProperties().then(properties => {
            this.setState({ properties })
        })
    }

    showDot = (status) => {
        switch (status) {
            case 'free':
                return <div className="green-dot" />
                break;
            case 'busy':
                return <div className="red-dot" />
                break;
            case 'booked':
                return <div className="yellow-dot" />
                break;
        }
    }

    componentWillReceiveProps = (nextProps) => {

        if (nextProps != this.props) {
            rentManagerApi.getPropertiesByFilter(nextProps.status, nextProps.hood)
                .then(properties => {
                    this.setState({properties})

                    if(nextProps.query) {
                        rentManagerApi.getPropertySearch(nextProps.status, nextProps.hood, nextProps.query)
                            .then(filteredProperties => {
                                this.setState({properties: filteredProperties})
                            })
                    }
            })            
        }        
    }

    deleteProperty = (reference) => {
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                rentManagerApi.deleteProperty(reference)
                .then(()=> {
                    swal(
                        'Deleted!',
                        'The property has been deleted',
                        'success'                        
                      )
                })
                .then(()=> {
                    this.props.history.push("/back/admin/properties")
                })
            }
          })
    }

    editProperty = (reference) => {
        this.props.onClickEdit(reference)
    }

    render() {
        return (
            <div className="card-columns">
                {this.state.properties.map(property => {
                    return <div className="card p-0" key={property.reference}>
                        <img className="card-img-top p-0" src={property.picture} alt="Card image cap" />
                        <div className="info-card">
                            <div className="card-body">
                                <h5 className="card-title">{property.reference} {this.showDot(property.status)}</h5>
                                <div className="card-text">
                                    <div className="container-fluid">
                                        <div className="row mb-3 mt-2">
                                            <div className="col-12 p-0 mt-2">{property.address}</div>
                                            <div className="col-12 p-0 mt-2">{property.neighbourhood}</div>
                                            <div className="col-12 p-0 mt-2">{property.price} €</div>
                                            <div className="col-6 p-0 mt-2"><Maximize2 />{property.sqm} m2</div>
                                            <div className="col-6 p-0"><User />{property.rooms} rooms</div>
                                            </div>
                                        </div>
                                    </div>
                                <div className="d-flex justify-content-around">
                                    <NavLink 
                                    className="btn btn-warning"
                                    onClick={(e)=> {e.preventDefault;
                                    this.editProperty(property.reference)}}
                                    to= '/back/admin/properties/edit'
                                    >
                                    Edit
                                    </NavLink>
                                    <button 
                                    className="btn btn-danger"
                                    onClick= {(e)=>{e.preventDefault;
                                    this.deleteProperty(property.reference)}}>
                                    Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                })}                
            </div>




        )
    }
}


export default withRouter(PropertiesList)