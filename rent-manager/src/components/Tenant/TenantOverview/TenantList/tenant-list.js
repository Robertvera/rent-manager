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
                            {this.props.tenants ?
                            this.props.tenants.map(tenant => {
                                return  <tr key={tenant.documentId}>
                                            <td>{tenant.name} {tenant.surname}</td>
                                            <td>{tenant.documentId}</td>                                    
                                        </tr>                                
                            })
                        :undefined}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default TenantList





