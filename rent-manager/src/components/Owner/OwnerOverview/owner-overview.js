import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import './owner-overview.css';
import rentManagerApi from '../../../api/api-client'
import moment from 'moment'

class OwnerOverview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayPropLease: undefined
        }
    }

    componentDidMount = () => {
        const ownerId = sessionStorage.getItem('ownerId')
        rentManagerApi.getOneOwner(ownerId)
            .then(owner => {
                this.storeOwnerId(owner._id)
                rentManagerApi.getPropertiesByOwner(owner._id)
                    .then(properties => {
                        let arrayPropLease = []
                        const arrayPromises = []
                        for (let i = 0; i < properties.length; i++) {
                            arrayPromises.push(rentManagerApi.getLeasesByProperty(properties[i]._id)
                                .then(lease => {
                                    arrayPropLease.push({ property: properties[i], lease: lease })
                                }))
                        }
                        return Promise.all(arrayPromises)
                            .then(values=>arrayPropLease)    
                    })
                    .then((arrayPropLease2)=>{                        
                        this.setState({ arrayPropLease: arrayPropLease2 })
                    })
            })
    }

    storeOwnerId = (owner) => {
        sessionStorage.setItem('owner_ID', (owner))
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

    render() {
  
        let _starting= ''  
        let _ending= ''
        
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid apartments-module mb-5">
                    <div className="row justify-content-center">
                    {this.state.arrayPropLease 
                    ?       
                    
                    
                    this.state.arrayPropLease.map(combo => {
                        if (combo.lease) {
                            _starting = moment((new Date(`${combo.lease.starting}`)).toString()).format('DD-MMM-YYYY').toString()
                            _ending = moment((new Date(`${combo.lease.ending}`)).toString()).format('DD-MMM-YYYY').toString()
                        } else {
                            _starting = '---'
                            _ending = '---'
                        }                                                
                        return <div className="card col-lg-3 col-md-5 col-sm-12 p-0" key={combo.property._id}>
                            <img className="card-img-top p-0" src={combo.property.picture} alt="Card image cap" />
                            <div className="info-card">
                                <div className="card-body">
                                    <h5 className="card-title">{combo.property.reference} {this.showDot(combo.property.status)}</h5>
                                    <div className="card-text">
                                        <p>Price: {combo.lease ? combo.lease.price : '---'} €/mo</p>
                                        <p>Deposit: {combo.lease ? combo.lease.deposit : '---'} €</p>
                                        <p>Starting: {combo.lease ? _starting : '---'}</p>
                                        <p>Ending: {combo.lease ? _ending : '---'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                    : undefined}

                    </div>
                </div>
            </main>

        )
    }
}


export default OwnerOverview