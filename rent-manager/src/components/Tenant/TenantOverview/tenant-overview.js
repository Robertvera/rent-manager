import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import './tenant-overview.css';
import rentManagerApi from '../../../api/api-client'
import AlertMessage from './AlertMessage/alert-message.js'
import PropertyBox from './PropertyBox/property-box'
import TenantList from './TenantList/tenant-list'
import RentalPrice from './RentalPrice/rental-price'
import Deposit from './Deposit/deposit'
import LeaseID from './LeaseID/lease-id'
import LeaseStarting from './LeaseStarting/lease-starting'
import LeaseEnding from './LeaseEnding/lease-ending'

class TenantOverview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tenants: [],
            propertyAddress: '',
            price: '',
            deposit: '',
            starting:'',
            ending:'',
            picture: '',
            outdatedPayments: false        
           
          }
        
      }

    componentDidMount = () => {
        if (!this.state.price) {
        const leaseId = sessionStorage.getItem('leaseId')
            rentManagerApi.getOneLease(leaseId).then(lease => {
                console.log(leaseId)
                this.setState({
                    price: lease.price,
                    deposit: lease.deposit,
                    starting: lease.starting,
                    ending: lease.ending,
                    tenants: lease.tenants,
                    propertyAddress: lease.property.address,
                    picture: lease.property.picture,                    
                })
            })
            
            rentManagerApi.getPaymentsByLeaseId(leaseId).then(payments => {
                const today = (new Date).toISOString()

                console.log(today)                

                payments.forEach((payment)=> {                    
                    let dueDate = payment.dueDate
                    console.log(dueDate)
                    if (dueDate < today && payment.status == 'pending') {
                        this.setState({
                            outdatedPayments: true
                        })
                    }
                })                                                

            })    
        }
        
    }


    render() {
        const leaseId = sessionStorage.getItem('leaseId')
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        {this.state.outdatedPayments ? <AlertMessage /> : null}
                        <PropertyBox 
                        address = {this.state.propertyAddress}
                        picture = {this.state.picture}
                        />
                        <div className="col-lg-5 col-sm-12 col-md-12 p-0 m-3">
                            <TenantList 
                            tenants = {this.state.tenants}
                            />
                            <RentalPrice 
                            price = {this.state.price}
                            />
                            <Deposit 
                            deposit = {this.state.deposit}
                            />
                            <LeaseID 
                            leaseId = {leaseId}
                            />                            
                        </div>
                        <LeaseStarting 
                        starting = {this.state.starting}
                        />
                        <LeaseEnding 
                        ending = {this.state.ending}
                        />
                    </div>
                </div>
            </main>

        )
    }
}


export default TenantOverview