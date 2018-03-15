import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'

class TenantList extends Component {
    render() {
        return (
            <div className="card col-12">
                <div className="card-body">
                    <h6 className="card-title text-center">
                        TENANTS
                                    </h6>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark Otto</td>
                                <td>452456345</td>
                            </tr>
                            <tr>
                                <td>Jacob Thornton</td>
                                <td>453452345</td>
                            </tr>
                            <tr>
                                <td>Larry the Bird</td>
                                <td>8347509384</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default TenantList





