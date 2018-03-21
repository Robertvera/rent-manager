import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import rentManagerApi from '../../../../api/api-client'

class PendingPayments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pendingPayments: []
        }
        
      }

    componentDidMount = () => {
        rentManagerApi.getPaymentsByStatus('pending').then(payments => {
            this.setState({
                pendingPayments: payments
            })
        })
    }
    
    render() {
        return (
            <div className="card col-lg-12 col-md-12 m-3">
                            <div className="card-title">
                                <h4 className="text-center pt-3">PENDING PAYMENTS</h4>
                            </div>
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">PROPERTY</th>
                                            <th scope="col">LEASE</th>
                                            <th scope="col">CONCEPT</th>
                                            <th scope="col">AMOUNT</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.pendingPayments.map(payment => {
                                            return  <tr key={payment.id}>
                                                        <td>{payment.property.reference}</td>
                                                        <td>{payment.lease}</td>
                                                        <td>{payment.concept}</td>
                                                        <td>{payment.amount} €</td>
                                                    </tr>
                                        })}                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
        )
    }
}


export default PendingPayments





