import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import { Trash2, Edit } from 'react-feather'
import rentManagerApi from '../../../../api/api-client'
import swal from 'sweetalert2'
import moment from 'moment'

class PaymentsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            payments: []

        }
    }

    componentDidMount = () => {
        rentManagerApi.getPayments()
            .then(payments => {
                this.setState({ payments })
            })
    }

    componentWillReceiveProps = (nextProps) => {

        if (nextProps != this.props) {
            rentManagerApi.getPaymentsByDate(nextProps.status, nextProps.starting, nextProps.ending)
                .then(payments => {
                    this.setState({payments})
            })            
        }        
    }

    deletePayment = (id) => {
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
                rentManagerApi.deletePayment(id)
                    .then(() => {
                        swal({
                            title: 'Payment deleted!',
                            type: 'success',
                            showConfirmButton: false,
                            timer: 2000,
                            onOpen: () => {
                                swal.showLoading()
                            }
                        })
                            .then(() => {
                                rentManagerApi.getPayments()
                                    .then(payments => {
                                        this.setState({ payments })
                                    })
                            })
                    })
            }
        })
    }


    render() {
        return (
            <div className="card col-lg-12 col-md-12 m-3">
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">PROPERTY</th>
                                <th scope="col">CONCEPT</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">DUE DATE</th>
                                <th scope="col">DATE OF PAYMENT</th>
                                <th scope="col">STATUS</th>
                                <th scope="col" />
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.payments ?
                                this.state.payments.map(payment => {
                                    let dueDate = moment((new Date(`${payment.dueDate}`)).toString()).format('DD-MMM-YYYY').toString()
                                    let paymentDate = moment((new Date(`${payment.paymentDate}`)).toString()).format('DD-MMM-YYYY').toString()
                                    return <tr>
                                        <td>{payment.property.reference}</td>
                                        <td>{payment.concept}</td>
                                        <td>{payment.amount} €</td>
                                        <td>{dueDate}</td>
                                        <td>{payment.paymentDate ? paymentDate : '---'}</td>
                                        <td>{payment.status === 'paid' ? <span className="badge badge-success">Paid</span> : <span className="badge badge-danger">Pending</span>}</td>
                                        <td className="pointer-cursor">
                                            <Trash2 cursor="pointer"
                                                onClick={(e) => { e.preventDefault; { this.deletePayment(payment.id) } }}
                                            />

                                        </td>
                                    </tr>
                                })
                                : undefined
                            }

                        </tbody>
                    </table>
                </div>
            </div>




        )
    }
}


export default PaymentsList