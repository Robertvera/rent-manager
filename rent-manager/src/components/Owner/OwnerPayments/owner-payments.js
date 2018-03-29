import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import { Info } from 'react-feather'
import './owner-payments.css';
import rentManagerApi from '../../../api/api-client'
import moment from 'moment'

class OwnerPayments extends Component {

  constructor(props) {
    super(props)
    this.state = {
      arrayPropPayment: ''
    }
  }

  componentDidMount = () => {
    const ownerId = sessionStorage.getItem('owner_ID')

    rentManagerApi.getPropertiesByOwner(ownerId)
      .then(properties => {
        let arrayPropPayment = []
        const arrayPromises = []
        for (let i = 0; i < properties.length; i++) {
          arrayPromises.push(rentManagerApi.getPaymentsByProperty(properties[i]._id)
          .then(payments => {
            arrayPropPayment.push({property: properties [i], payments: payments})
          })
        )
        }

        return Promise.all(arrayPromises)
          .then(values => arrayPropPayment)
      })
      .then((_arrayPropPayment) => {
        this.setState({ arrayPropPayment: _arrayPropPayment })
      })

  }

  render() {
    let _paymentDate= ''  
    return (
      <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
        <div className="container-fluid leases-module">
          <div className="row justify-content-center">            
            {/* LIST */}
            <div className="card col-lg-10 col-md-10 m-3">
              <div className="card-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">PROPERTY</th>
                      <th scope="col">CONCEPT</th>
                      <th scope="col">PAYMENT DATE</th>
                      <th scope="col">AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>

                    {this.state.arrayPropPayment
                      ?

                      this.state.arrayPropPayment.map(combo => {
                      if (combo.payment) {
                        if(combo.payment.paymentDate) {
                          _paymentDate = moment((new Date(`${combo.paymentDate}`)).toString()).format('DD-MMM-YYYY').toString()                          
                        } else {
                          _paymentDate = 'pending'
                        }                          
                      } 


                       return combo.payments ? combo.payments.map(payment => {
                          return <tr>
                          <td>{combo.property.reference}</td>
                          <td>{payment.concept}</td>
                          <td>{_paymentDate}</td>
                          <td>{payment.amount} €</td>
                        </tr>
                          
                        })
                        :undefined
                      })
                      : undefined}

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


export default OwnerPayments


