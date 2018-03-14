import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import './admin-add-leases.css';

class AdminAddLeases extends Component {
    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
  <div className="container-fluid">
    <div className="row justify-content-center">
      <form className="col-7  p-0">
        <div className="container-fluid p-0">
          <div className="row">
            {/* PROPERTY */}
            <div className="form-group col-12">
              <label htmlFor="property">Property</label>
              <input type="text" className="form-control" id="property" aria-describedby="property" placeholder="property" defaultValue="GUARDIA I" />
            </div>
            {/* STARTING DATE, ENDING DATE, PRICE */}
            <div className="form-group col-sm-12 col-md-6 col-lg-4">
              <label htmlFor="starting-date">Starting date</label>
              <input type="text" className="form-control" id="starting-date" placeholder="Starting date" defaultValue="12/08/1990" />
            </div>
            <div className="form-group col-sm-12 col-md-6 col-lg-4">
              <label htmlFor="ending-date">Ending date</label>
              <input type="text" className="form-control" id="ending-date" placeholder="Ending date" defaultValue="12/12/1990" />
            </div>
            <div className="form-group col-sm-12 col-md-6 col-lg-4">
              <label htmlFor="price">Price</label>
              <input type="text" className="form-control" id="price" placeholder="Price" defaultValue="1.200 €" />
            </div>
            {/* DEPOSIT, SQM, NEIGHBOURHOOD */}
            <div className="form-group col-sm-12 col-md-6 col-lg-4">
              <label htmlFor="deposit">Deposit</label>
              <input type="text" className="form-control" id="deposit" placeholder="Deposit" defaultValue="2.400 €" />
            </div>
            <div className="form-group col-sm-12 col-md-6 col-lg-4">
              <label htmlFor="sqm">Deposit</label>
              <input type="text" className="form-control" id="sqm" placeholder="SQM" defaultValue={85} />
            </div>
            <div className="form-group col-sm-12 col-md-6 col-lg-4">
              <label htmlFor="credit-card">Neighbourhood</label>
              <select className="custom-select" name="neighbourhood">
                <option value="barceloneta">Barceloneta</option>
                <option value="born">Born</option>
                <option value="eixample">Eixample</option>
                <option value="gothic">Gothic</option>
                <option value="gracia">Gràcia</option>
                <option value="poble-nou">Poble Nou</option>
                <option value="raval">Raval</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      {/* TENANT */}
      <h4 className="col-7">TENANT</h4>
      <form className="col-7 p-0">
        <div className="container-fluid p-0">
          <div className="row">
            {/* NAME, SURNAME */}
            <div className="form-group col-sm-12 col-md-6 col-lg-6">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Name" defaultValue />
            </div>
            <div className="form-group col-sm-12 col-md-6 col-lg-6">
              <label htmlFor="surname">Surname</label>
              <input type="text" className="form-control" id="surname" placeholder="Surname" defaultValue />
            </div>
            {/* ID, NATIONALITY */}
            <div className="form-group col-sm-12 col-md-6 col-lg-6">
              <label htmlFor="passport">ID/Passport</label>
              <input type="text" className="form-control" id="passport" placeholder="ID/Passport" defaultValue />
            </div>
            <div className="form-group col-sm-12 col-md-6 col-lg-6">
              <label htmlFor="nationality">Nationality</label>
              <input type="text" className="form-control" id="nationality" placeholder="Nationality" defaultValue />
            </div>
            {/* TELEPHONE, EMAIL */}
            <div className="form-group col-sm-12 col-md-6 col-lg-6">
              <label htmlFor="telephone">Telephone</label>
              <input type="text" className="form-control" id="telephone" placeholder="Telephone" defaultValue />
            </div>
            <div className="form-group col-sm-12 col-md-6 col-lg-6">
              <label htmlFor="email">e-mail</label>
              <input type="text" className="form-control" id="email" placeholder="example@email.com" defaultValue />
            </div>
            {/* ADD BUTTON */}
            <button type="button" className="btn btn-success col-1 ml-3 mb-5">Add</button>                                    
          </div>
        </div>
      </form>
      {/* SAVE BUTTON */}
      <div className="container-fluid col-7 p-0">
        <div className="row justify-content-center">
          <button type="button" className="btn btn-danger col-3 mb-5">SAVE</button>
        </div>
      </div>                        
    </div>
    </div>
    </main>

        )
    }
}


export default AdminAddLeases