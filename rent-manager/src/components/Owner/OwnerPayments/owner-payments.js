import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import { Info } from 'react-feather'
import './owner-payments.css';

class OwnerPayments extends Component {
    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
  <div className="container-fluid leases-module">
    <div className="row justify-content-center">
      {/* FILTERS */}
      <div className="card col-10 py-3">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <input type="text" className="form-control col-lg-2 col-md-5 col-sm-12" placeholder="Search by property" />
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className="card col-lg-10 col-md-10 m-3">
        <div className="card-body">                                
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">PROPERTY</th>
                <th scope="col">CONCEPT</th>
                <th scope="col">DATE</th>
                <th scope="col">AMOUNT</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GUARDIA 1</td>
                <td>January 2017 Rent</td>
                <td>24/09/1990</td>
                <td>1.099,22 €</td>
                <td className="pointer-cursor">
                    <Info data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?"/>                  
                </td>
              </tr>
              <tr>
                <td>GUARDIA 1</td>
                <td>January 2017 Rent</td>
                <td>24/09/1990</td>
                <td>1.099,22 €</td>
                <td className="pointer-cursor">
                  <Info/>
                </td>
              </tr>
              <tr>
                <td>GUARDIA 1</td>
                <td>January 2017 Rent</td>
                <td>24/09/1990</td>
                <td>1.099,22 €</td>
                <td className="pointer-cursor">
                  <Info/>
                </td>
              </tr>
              <tr>
                <td>GUARDIA 1</td>
                <td>January 2017 Rent</td>
                <td>24/09/1990</td>
                <td>1.099,22 €</td>
                <td className="pointer-cursor">
                  <Info/>
                </td>
              </tr>
              <tr>
                <td>GUARDIA 1</td>
                <td>January 2017 Rent</td>
                <td>24/09/1990</td>
                <td>1.099,22 €</td>
                <td className="pointer-cursor">
                  <Info/>
                </td>
              </tr>
              <tr>
                <td>GUARDIA 1</td>
                <td>January 2017 Rent</td>
                <td>24/09/1990</td>
                <td>1.099,22 €</td>
                <td className="pointer-cursor">
                  <Info/>
                </td>
              </tr>
              <tr>
                <td>GUARDIA 1</td>
                <td>January 2017 Rent</td>
                <td>24/09/1990</td>
                <td>1.099,22 €</td>
                <td className="pointer-cursor">
                  <Info/>
                </td>
              </tr>
              <tr>
                <td>GUARDIA 1</td>
                <td>January 2017 Rent</td>
                <td>24/09/1990</td>
                <td>1.099,22 €</td>
                <td className="pointer-cursor">
                  <Info/>
                </td>
              </tr>
              <tr>
                <td>GUARDIA 1</td>
                <td>January 2017 Rent</td>
                <td>24/09/1990</td>
                <td>1.099,22 €</td>
                <td className="pointer-cursor">
                  <Info/>
                </td>
              </tr>
              <tr>
                <td>GUARDIA 1</td>
                <td>January 2017 Rent</td>
                <td>24/09/1990</td>
                <td>1.099,22 €</td>
                <td className="pointer-cursor">
                  <Info/>
                </td>
              </tr>
              <tr>
                <td>GUARDIA 1</td>
                <td>January 2017 Rent</td>
                <td>24/09/1990</td>
                <td>1.099,22 €</td>
                <td className="pointer-cursor">
                  <Info/>
                </td>
              </tr>
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