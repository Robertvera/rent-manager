import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import { Trash2, Edit } from 'react-feather'
import './admin-leases.css';

class AdminLeases extends Component {
    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
  <div className="container-fluid leases-module">
    <div className="row justify-content-center">
      {/* FILTERS */}
      <div className="card col-12 py-3">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <select className="custom-select col-lg-2 col-md-5 col-sm-12" name="status">
              <option value="active">Active</option>
              <option value="closed">Closed</option>                                        
            </select>
            <select className="custom-select col-lg-2 col-md-5 col-sm-12" name="starting-date">
              <option value="barceloneta">January 18</option>
              <option value="born">January 18</option>
              <option value="eixample">January 18</option>
              <option value="gothic">January 18</option>
              <option value="gracia">January 18</option>
              <option value="poble-nou">January 18</option>
              <option value="raval">January 18</option>
            </select>
            <select className="custom-select col-lg-2 col-md-5 col-sm-12" name="ending-date">
              <option value="barceloneta">January 18</option>
              <option value="born">January 18</option>
              <option value="eixample">January 18</option>
              <option value="gothic">January 18</option>
              <option value="gracia">January 18</option>
              <option value="poble-nou">January 18</option>
              <option value="raval">January 18</option>
            </select>
            <input type="text" className="form-control col-lg-2 col-md-5 col-sm-12" placeholder="Search by property" />            
            <div className="col-lg-2 col-md-12 col-sm-12 p-0">
              <NavLink to="leases/add"><button type="button" className="btn btn-success">+ Add new lease</button></NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className="card col-lg-12 col-md-12 m-3">
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">PROPERTY</th>
                <th scope="col">STARTING</th>
                <th scope="col">ENDING</th>
                <th scope="col">PRICE</th>
                <th scope="col">DEPOSIT</th>
                <th scope="col">STATUS</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0001</td>
                <td>GUARDIA 1</td>
                <td>8/07/2009</td>
                <td>18/09/2009</td>
                <td>1.200 €</td>
                <td>2.400 €</td>
                <td><a href="#" className="badge badge-success">Active</a></td>
                <td className="pointer-cursor"><NavLink to="/back/admin/add-leases"><Edit /></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;<Trash2 /></td>
              </tr>
              <tr>
                <td>0001</td>
                <td>GUARDIA 1</td>
                <td>8/07/2009</td>
                <td>18/09/2009</td>
                <td>1.200 €</td>
                <td>2.400 €</td>
                <td><a href="#" className="badge badge-danger">Closed</a></td>
                <td className="pointer-cursor"><NavLink to="/back/admin/add-leases"><Edit /></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;<Trash2 /></td>
              </tr>
              <tr>
                <td>0001</td>
                <td>GUARDIA 1</td>
                <td>8/07/2009</td>
                <td>18/09/2009</td>
                <td>1.200 €</td>
                <td>2.400 €</td>
                <td><a href="#" className="badge badge-success">Active</a></td>
                <td className="pointer-cursor"><NavLink to="/back/admin/add-leases"><Edit /></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;<Trash2 /></td>
              </tr>
              <tr>
                <td>0001</td>
                <td>GUARDIA 1</td>
                <td>8/07/2009</td>
                <td>18/09/2009</td>
                <td>1.200 €</td>
                <td>2.400 €</td>
                <td><a href="#" className="badge badge-danger">Closed</a></td>
                <td className="pointer-cursor"><NavLink to="/back/admin/add-leases"><Edit /></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;<Trash2 /></td>
              </tr>
              <tr>
                <td>0001</td>
                <td>GUARDIA 1</td>
                <td>8/07/2009</td>
                <td>18/09/2009</td>
                <td>1.200 €</td>
                <td>2.400 €</td>
                <td><a href="#" className="badge badge-success">Active</a></td>
                <td className="pointer-cursor"><NavLink to="/back/admin/add-leases"><Edit /></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;<Trash2 /></td>
              </tr>
              <tr>
                <td>0001</td>
                <td>GUARDIA 1</td>
                <td>8/07/2009</td>
                <td>18/09/2009</td>
                <td>1.200 €</td>
                <td>2.400 €</td>
                <td><a href="#" className="badge badge-success">Active</a></td>
                <td className="pointer-cursor"><NavLink to="/back/admin/add-leases"><Edit /></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;<Trash2 /></td>
              </tr>
              <tr>
                <td>0001</td>
                <td>GUARDIA 1</td>
                <td>8/07/2009</td>
                <td>18/09/2009</td>
                <td>1.200 €</td>
                <td>2.400 €</td>
                <td><a href="#" className="badge badge-success">Active</a></td>
                <td className="pointer-cursor"><NavLink to="/back/admin/add-leases"><Edit /></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;<Trash2 /></td>
              </tr>
              <tr>
                <td>0001</td>
                <td>GUARDIA 1</td>
                <td>8/07/2009</td>
                <td>18/09/2009</td>
                <td>1.200 €</td>
                <td>2.400 €</td>
                <td><a href="#" className="badge badge-success">Active</a></td>
                <td className="pointer-cursor"><NavLink to="/back/admin/add-leases"><Edit /></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;<Trash2 /></td>
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


export default AdminLeases