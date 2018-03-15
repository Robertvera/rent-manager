import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import { Info } from 'react-feather'
import './admin-add-transfers.css';

class AdminAddTransfers extends Component {
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
            {/* CONCEPT, DATE */}
            <div className="form-group col-sm-12 col-md-6 col-lg-6">
              <label htmlFor="concept">Concept</label>
              <input type="text" className="form-control" id="concept" placeholder="concept" defaultValue />
            </div>
            <div className="form-group col-sm-12 col-md-6 col-lg-6">
              <label htmlFor="date">Date</label>
              <input type="text" className="form-control" id="date" placeholder="Date" defaultValue />
            </div>
            {/* BASE */}
            <div className="form-group col-12">
              <label htmlFor="base">Base</label>
              <input type="text" className="form-control" id="base" placeholder="Base" defaultValue="1.200 €" />
            </div>
            {/* DEDUCTIONS */}
          </div>
        </div>
      </form>
      {/* TENANT */}
      <h4 className="col-7">DEDUCTIONS</h4>
      <form className="col-7 p-0">
        <div className="container-fluid p-0">
          <div className="row">
            {/* AMOUNT, CONCEPT */}
            <div className="form-group col-sm-12 col-md-4 col-lg-4">
              <label htmlFor="amount">Amount</label>
              <input type="text" className="form-control" id="amount" placeholder="Amount" defaultValue="120 €" />
            </div>
            <div className="form-group col-sm-12 col-md-8 col-lg-8">
              <label htmlFor="concept">Concept</label>
              <input type="text" className="form-control" id="concept" placeholder="Concept" defaultValue="Administration fee" />
            </div>                                    
            {/* ADD BUTTON */}
            <button type="button" className="btn btn-success col-1 ml-3 mb-5">Add</button>                                    
          </div>
        </div>
      </form>
      <h4 className="col-7 p-0">
        TOTAL: 1.080 €
      </h4>
      {/* SAVE BUTTON */}
      <div className="container-fluid col-7 p-0">
        <div className="row justify-content-center">
          <button type="button" className="btn btn-danger col-3 mb-5">SAVE</button>
        </div>
      </div>                        
    </div></div></main>





        )
    }
}


export default AdminAddTransfers