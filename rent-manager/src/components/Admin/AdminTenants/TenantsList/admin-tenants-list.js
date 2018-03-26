import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import rentManagerApi from '../../../../api/api-client'

class TenantsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tenants: []
        }
    }

    componentDidMount = () => {
        rentManagerApi.getTenants().then(tenants => {
            this.setState({ tenants })
        })
    }

    componentWillReceiveProps = (nextProps) => {

        rentManagerApi.getTenantSearch(nextProps.query)
            .then(filteredTenants => {
                this.setState({ tenants: filteredTenants })
            })

    }

    render() {
        return (
            <div className="card col-lg-10 col-md-10 m-3">
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">NAME</th>
                                <th scope="col">E-MAIL</th>
                                <th scope="col">TELEPHONE NUMBER</th>
                                <th scope="col">DOCUMENT ID</th>
                            </tr>
                        </thead>
                        {this.state.tenants ? 
                        <tbody>                            
                            {this.state.tenants.map(tenant => {
                                return <tr key={tenant.documentId}>
                                    <td>{tenant.name} {tenant.surname}</td>
                                    <td>{tenant.email}</td>
                                    <td>{tenant.phoneNumber}</td>
                                    <td>{tenant.documentId}</td>
                                </tr>
                            })}
                        </tbody>
                        : undefined}
                    </table>
                </div>
            </div>

        )
    }
}


export default TenantsList