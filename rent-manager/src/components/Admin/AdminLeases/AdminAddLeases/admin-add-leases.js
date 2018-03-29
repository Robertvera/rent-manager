import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import rentManagerApi from '../../../../api/api-client'
import { PlusCircle, PlusSquare } from 'react-feather';
import swal from 'sweetalert2'
import moment from 'moment'

class AdminAddLeases extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lease: {
        property: '',
        tenants: [{}],
        active: true,
        starting: '',
        ending: '',
        price: '',
        deposit: ''
      },
      tenants: '',
      properties: ''

    }
  }

  componentDidMount = () => {
    rentManagerApi.getPropertiesByStatus('free')
      .then(properties => {
        this.setState({ properties })
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

    return
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
        }).then(() => {
          swal({
            position: 'top-end',
            type: 'success',
            title: 'Tenant saved',
            showConfirmButton: false,
            timer: 1500
          })
          .then(()=> {
            this.setState({
              tenants: tenantsArray
            })          
          })
          
        })
    }
  }

  createLease = () => {

    const starting = moment(this.state.lease.starting, "YYYY-MM-DD").format();

    const ending = moment(this.state.lease.ending, "YYYY-MM-DD").format();    

    const { tenants } = this.state

    const { property, active, price, deposit } = this.state.lease

    rentManagerApi.createLease(property, tenants, active, starting, ending, price, deposit)
      .then((result) => {
        if (result.status === 'OK') {
          // CREATE PAYMENTS
          const _starting = moment(this.state.lease.starting, "YYYY-MM-DD")
          const _ending = moment(this.state.lease.ending, "YYYY-MM-DD")
          let monthsDiff = _ending.diff(_starting, 'months')
          const startingMonth = moment(this.state.lease.starting).month() + 1

          for (let i = startingMonth; i < monthsDiff + startingMonth + 1; i++) {
            let date = moment(i+1, 'M').format('MMMM');
            let concept = `${date} 2018 rent`
            let dueDate = moment(['2018', i]).add(1,'day').toISOString()

            rentManagerApi.createPayment(concept, 'rent', result.data._id , result.data.property, 'pending', dueDate, null, result.data.price)
          }

          swal({
            title: 'Lease created!',
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
        {this.state.properties ?
          <div className="container-fluid">
            <div className="row justify-content-center">
              <form className="col-7  p-0">
                <div className="container-fluid p-0">
                  <div className="row">
                    {/* PROPERTY */}
                    <div className="form-group col-12">
                      <label htmlFor="property">Property</label>
                      <select
                        className="custom-select col-12"
                        name="property"
                        onChange={this.handleChangeLease}
                      >
                        <option value="">Select a property</option>
                        {this.state.properties.map(property => {
                          return <option value={property._id}>{property.reference}</option>
                        })}
                      </select>
                    </div>
                    {/* STARTING DATE, ENDING DATE, PRICE */}
                    <div className="form-group col-sm-12 col-md-6 col-lg-6">
                      <label htmlFor="starting-date">Starting date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="starting-date"
                        name="starting"
                        placeholder="Starting date"
                        onChange={this.handleChangeLease}
                      />
                    </div>
                    <div className="form-group col-sm-12 col-md-6 col-lg-6">
                      <label htmlFor="ending-date">Ending date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="ending-date"
                        name="ending"
                        placeholder="Ending date"
                        onChange={this.handleChangeLease}
                      />
                    </div>
                    <div className="form-group col-sm-12 col-md-6 col-lg-6">
                      <label htmlFor="price">Price</label>
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        name="price"
                        placeholder="Price"
                        onChange={this.handleChangeLease}
                      />
                    </div>
                    <div className="form-group col-sm-12 col-md-6 col-lg-6">
                      <label htmlFor="deposit">Deposit</label>
                      <input
                        type="text"
                        className="form-control"
                        id="deposit"
                        name="deposit"
                        placeholder="Deposit"
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
                return <form className="col-7 p-0" key={i}>
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
                          onChange={this.handleChangeTenants}
                        />
                      </div>
                      <div className="text-right">
                      Click to register the new tenant&nbsp;&nbsp;<PlusSquare
                        onClick={(e) => {
                          e.preventDefault;
                          this.registerTenant();
                        }} 
                      />
                      </div>
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
                    onClick={this.createLease}
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


export default AdminAddLeases