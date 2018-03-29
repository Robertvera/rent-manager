import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import rentManagerApi from '../../../../api/api-client'
import { PlusCircle, PlusSquare } from 'react-feather';
import swal from 'sweetalert2'
import moment from 'moment'

class AdminEditLeases extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lease: '',
      tenants: ''

    }
  }

  componentDidMount = () => {
    rentManagerApi.getOneLease(this.props.leaseId)
      .then(lease => {
        this.setState({ lease })
      })
  }

  addTenant = () => {

    const newTenant = {
      name: "",
      surname: "",
      documentId: "",
      email: "",
      phoneNumber: "",
      nationality: ""
    }

    let tenantArray = [...this.state.lease.tenants]
    tenantArray.push(newTenant)

    this.setState(
      this.state.lease.tenants = tenantArray
    )
  }

  handleChangeTenants = (e) => {
    let { name, value, accessKey } = e.target;
    let lease = { ...this.state.lease };
    lease.tenants[accessKey][name] = value;
    this.setState({ lease });
  }

  handleChangeLease = (e) => {
    let { name, value } = e.target;
    let lease = { ...this.state.lease };
    lease[name] = value;
    this.setState({ lease });
  }

  registerTenant = () => {
    let tenantsArray = []
        for (let i = 0; i < this.state.lease.tenants.length; i++) {
          let name = this.state.lease.tenants[i].name
          let surname = this.state.lease.tenants[i].surname
          let documentId = this.state.lease.tenants[i].documentId
          let email = this.state.lease.tenants[i].email
          let phoneNumber = this.state.lease.tenants[i].phoneNumber
          let nationality = this.state.lease.tenants[i].nationality


          rentManagerApi.createTenant(name, surname, documentId, true, email, phoneNumber, nationality)
            .then(tenant => {
              tenantsArray.push(tenant)
            }).then(()=> {
              this.setState({
                tenants: tenantsArray
              })
            })
        }        
  }

  updateLease = () => {

    const ending = moment(this.state.lease.ending, "YYYY-MM-DD").format();

    const { tenants } = this.state

    const { _id, property, active, starting, price, deposit } = this.state.lease
    
        rentManagerApi.updateLease(_id, property._id, tenants, active, starting, ending, price, deposit)
          .then((result) => {
            if (result.status === 'OK') {
              swal({
                title: 'Lease updated!',
                text: 'You are being redirected',
                type: 'success',
                showConfirmButton: false,
                timer: 2500,
                onOpen: () => {
                  swal.showLoading()
                }
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

  formatDate = (date) => {
    let formattedDate = moment((new Date(date)).toString()).format('DD/MM/YYYY').toString()

    return formattedDate
  }

  render() {

    let i = -1

    return (
      <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
        {this.state.lease ?
          <div className="container-fluid">
            <div className="row justify-content-center">
              <form className="col-7  p-0">
                <div className="container-fluid p-0">
                  <div className="row">
                    {/* PROPERTY */}
                    <div className="form-group col-12">
                      <label htmlFor="property">Property</label>
                      <input
                        type="text"
                        className="form-control"
                        id="property"
                        name="property"
                        placeholder="property"
                        value={this.state.lease.property.reference}
                        readOnly
                      />
                    </div>
                    {/* STARTING DATE, ENDING DATE, PRICE */}
                    <div className="form-group col-sm-12 col-md-6 col-lg-4">
                      <label htmlFor="starting-date">Starting date</label>
                      <input
                        type="text"
                        className="form-control"
                        id="starting-date"
                        name="starting"
                        placeholder="Starting date"
                        defaultValue={this.formatDate(this.state.lease.starting)}
                        readOnly
                      />
                    </div>
                    <div className="form-group col-sm-12 col-md-6 col-lg-4">
                      <label htmlFor="ending-date">Ending date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="ending-date"
                        name="ending"
                        placeholder="Ending date"
                        defaultValue={this.formatDate(this.state.lease.ending)}
                        onChange={this.handleChangeLease}
                      />
                    </div>
                    <div className="form-group col-sm-12 col-md-6 col-lg-4">
                      <label htmlFor="price">Price</label>
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        name="price"
                        placeholder="Price"
                        defaultValue={this.state.lease.price}
                        onChange={this.handleChangeLease}
                      />
                    </div>

                  </div>
                </div>
              </form>
              {/* TENANT */}
              <h4 className="col-7">TENANT</h4>

              {this.state.lease.tenants.map(tenant => {
                i++
                return <form className="col-7 p-0" key={tenant.documentId}>
                  <hr />
                  <div className="container-fluid p-0">
                    <div className="row">
                      {/* NAME, SURNAME */}
                      <div className="form-group col-sm-12 col-md-6 col-lg-6">
                        <label htmlFor="name">Name</label>
                        <input
                          accessKey={i}
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Name"
                          defaultValue={tenant.name}
                          onChange={(e) => { { this.handleChangeTenants(e) } }}
                        />
                      </div>
                      <div className="form-group col-sm-12 col-md-6 col-lg-6">
                        <label htmlFor="surname">Surname</label>
                        <input
                          accessKey={i}
                          type="text"
                          className="form-control"
                          id="surname"
                          name="surname"
                          placeholder="Surname"
                          defaultValue={tenant.surname}
                          onChange={this.handleChangeTenants}
                        />
                      </div>
                      {/* ID, NATIONALITY */}
                      <div className="form-group col-sm-12 col-md-6 col-lg-6">
                        <label htmlFor="passport">ID/Passport</label>
                        <input
                          accessKey={i}
                          type="text"
                          className="form-control"
                          id="passport"
                          name="documentId"
                          placeholder="ID/Passport"
                          defaultValue={tenant.documentId}
                          onChange={this.handleChangeTenants}
                        />
                      </div>
                      <div className="form-group col-sm-12 col-md-6 col-lg-6">
                        <label htmlFor="nationality">Nationality</label>
                        <input
                          accessKey={i}
                          type="text"
                          className="form-control"
                          id="nationality"
                          name="nationality"
                          placeholder="Nationality"
                          defaultValue={tenant.nationality}
                          onChange={this.handleChangeTenants}
                        />
                      </div>
                      {/* TELEPHONE, EMAIL */}
                      <div className="form-group col-sm-12 col-md-6 col-lg-6">
                        <label htmlFor="telephone">Telephone</label>
                        <input
                          accessKey={i}
                          type="text"
                          className="form-control"
                          id="telephone"
                          name="phoneNumber"
                          placeholder="Telephone"
                          defaultValue={tenant.phoneNumber}
                          onChange={this.handleChangeTenants}
                        />
                      </div>
                      <div className="form-group col-sm-12 col-md-6 col-lg-6">
                        <label htmlFor="email">e-mail</label>
                        <input
                          accessKey={i}
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="example@email.com"
                          defaultValue={tenant.email}
                          onChange={this.handleChangeTenants}
                        />
                      </div>
                      Click to register the new tenant&nbsp;&nbsp;<PlusSquare
                        onClick={(e) => {
                          e.preventDefault;
                          this.registerTenant();
                        }} 
                      />
                    </div>
                  </div>
                </form>
              })}


              {/* ADD BUTTON */}
              <div className="col-7 mb-5">
              <hr/>
              Click to add a new tenant&nbsp;&nbsp;<PlusCircle
                  onClick={(e) => {
                    e.preventDefault;
                    this.addTenant();
                  }}
                />
              </div>
              {/* SAVE BUTTON */}
              <div className="container-fluid col-7 p-0">
                <div className="row justify-content-center">
                  <button
                    type="button"
                    className="btn btn-danger col-3 mb-5"
                    onClick={this.updateLease}
                  >
                    SAVE
                  </button>
                </div>
              </div>
            </div>
          </div>
          : undefined}
      </main>

    )
  }
}


export default AdminEditLeases