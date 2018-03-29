import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import './tenant-checkout.css';
import rentManagerApi from '../../../api/api-client'
import swal from 'sweetalert2'

class TenantCheckout extends Component {

    constructor(props) {
        super(props)
        this.state = {
          paymentInfo: {}}
         
        }
      
    componentDidMount = () => {
        rentManagerApi.getOnePayment(this.props.paymentId)
            .then(payment=> {
                this.setState({paymentInfo: payment})
            })
    }

    updateStatus = () => {
        let paymentDate = new Date
        rentManagerApi.updatePayment(this.props.paymentId, this.state.paymentInfo.concept, this.state.paymentInfo.type, this.state.paymentInfo.lease, this.state.paymentInfo.property, 'paid', this.state.paymentInfo.dueDate, paymentDate, this.state.paymentInfo.amount)
            .then(payment => {
                if (payment.status === 'OK') {
                    swal({
                                    title: 'Payment complete!',
                                    text: 'You are being redirected',
                                    type: 'success',
                                    showConfirmButton: false,
                                    timer: 2500,
                                    onOpen: () => {
                                        swal.showLoading()
                                      }                
                    })
                    .then(() => {
                        this.props.history.push("/back/tenant/payments")
                    })                                                                
                } else {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                      })
                }
            })
    }

    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <h4>PAYMENT DETAILS</h4>
                <div className="container-fluid">
                    <div className="row justify-content-center mt-5">
                        <div className="card p-3">
                            <div className="card-text">
                                <p className="col-12 ">Concept:
                                <span className="details"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.paymentInfo.concept}</span>
                                </p>
                                <p className="col-12">Amount:
                                <span className="details"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {this.state.paymentInfo.amount} €</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-center mt-5">
                        <div className="card p-5 mb-5">
                            <div className="card-text">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="card-holder">Card holder</label>
                                        <input type="text" className="form-control" id="card-holder" aria-describedby="card-holder" placeholder="Card holder" required/>
                                        <small id="card-holder-info" className="form-text text-muted">We'll never share your credit card infomation.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="credit-card">Credit card</label>
                                        <input type="text" className="form-control" id="credit-card" placeholder="Credit card" required/>
                                    </div>
                                    <div className="container p-0">
                                        <div className="row justify-content-around">
                                            <div className="form-group col-12 col-lg-5 p-0">
                                                <label htmlFor="credit-card">Expiry date</label>
                                                <input type="text" className="form-control" id="expiry-date" placeholder="Expiry date" required/>
                                            </div>
                                            <div className="form-group col-12 col-lg-5 p-0">
                                                <label htmlFor="credit-card">Security code</label>
                                                <input type="text" className="form-control" id="security-code" placeholder="Security code" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button 
                                        type="submit" 
                                        className="btn btn-danger"
                                        onClick={(e) => {e.preventDefault;
                                                        this.updateStatus();
                                        }}
                                        >
                                        PROCEED TO PAYMENT</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        )
    }
}


export default withRouter(TenantCheckout)