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
          payments: [],
          paymentId: ''
         
        }
      }

    componentDidMount = () => {
        const leaseId = sessionStorage.getItem('leaseId')
        rentManagerApi.getPaymentsByLeaseId(leaseId).then(payments => this.setState({payments}))
    }

    setPaymentId = (paymentId) => {
        this.setState({paymentId})
        this.props.onClickPendingPayment(paymentId)
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
                                            
                                            let paymentDate = payment.paymentDate ? moment((new Date(`${payment.paymentDate}`)).toString()).format('DD-MMM-YYYY').toString() : '---'                                            
                                            let dueDate = moment((new Date(`${payment.dueDate}`)).toString()).format('DD-MMM-YYYY').toString()                                            
                                            return  <tr key = {payment._id}>
                                                        <td>{payment.concept}</td>
                                                        <td>{payment.amount} €</td>
                                                        <td>{dueDate}</td>                                                        
                                                        <td>{paymentDate}</td>
                                                        {(payment.status) == 'pending' ? 
                                                        <td>
                                                        <NavLink 
                                                        className="badge badge-danger" 
                                                        to="/back/tenant/checkout"
                                                        onClick={(e)=>{e.preventDefault;
                                                        this.setPaymentId(payment._id)  
                                                        }} 
                                                        >
                                                        Click to pay
                                                        </NavLink>
                                                        </td> 
                                                        : 
                                                        <td><span className="badge badge-success">Paid</span></td>}
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