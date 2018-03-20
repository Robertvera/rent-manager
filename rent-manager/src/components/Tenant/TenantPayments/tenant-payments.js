import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import './tenant-payments.css';
import rentManagerApi from '../../../api/api-client'
import moment from 'moment'

class TenantPayments extends Component {
    constructor(props) {
        super(props)
        this.state = {
          payments: []
         
        }
      }

    componentDidMount = () => {
        rentManagerApi.getPayments().then(payments => this.setState({payments}))
    }

    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="card col-lg-10 m-3">
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">CONCEPT</th>
                                            <th scope="col">AMOUNT</th>
                                            <th scope="col">DUE DATE</th>
                                            <th scope="col">DATE OF PAYMENT</th>
                                            <th scope="col">STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.payments.map(payment => {
                                            let paymentDate = (new Date(`${payment.paymentDate}`)).toString()
                                            let dueDate = (new Date(`${payment.dueDate}`)).toString()
                                            return  <tr>
                                                        <td>{payment.concept}</td>
                                                        <td>{payment.amount} €</td>
                                                        <td>{moment(dueDate).format('DD-MMM-YYYY').toString()}</td>                                                        
                                                        <td>{moment(paymentDate).format('DD-MMM-YYYY').toString()}</td>
                                                        {(payment.status) == 'pending' ? 
                                                        <td><NavLink href="#" className="badge badge-danger" to="/back/tenant/checkout">Click to pay</NavLink></td> 
                                                        : 
                                                        <td><a href="#" className="badge badge-success">Paid</a></td>}
                                                    </tr>
                                        })}                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>



        )
    }
}


export default TenantPayments