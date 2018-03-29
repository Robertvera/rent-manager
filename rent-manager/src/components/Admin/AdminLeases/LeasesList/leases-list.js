import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import { Trash2, Edit } from 'react-feather'
import rentManagerApi from '../../../../api/api-client'
import swal from 'sweetalert2'
import moment from 'moment'

class LeasesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leases: []

        }
    }

    componentDidMount = () => {
        
        rentManagerApi.getLeases()
            .then(leases => {                
                this.setState({ leases })
            })                         
        
    }


    componentWillReceiveProps = (nextProps) => {

        if (nextProps != this.props) {
            rentManagerApi.getLeasesByStatus(nextProps.status)
                .then(leases => {
                    this.setState({leases})

                    if(nextProps.query) {
                        rentManagerApi.getLeaseSearch(nextProps.status, nextProps.query)
                            .then(filteredLeases => {
                                this.setState({leases: filteredLeases})
                            })
                    }
            })            
        }        
    }

    deleteLease = (id) => {
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                rentManagerApi.deleteLease(id)
                    .then(() => {
                        swal({
                            title: 'Lease deleted!',
                            type: 'success',
                            showConfirmButton: false,
                            timer: 2000,
                            onOpen: () => {
                                swal.showLoading()
                            }
                        })
                            .then(() => {
                                rentManagerApi.getLeases()
                                    .then(leases => {
                                        this.setState({ leases })
                                    })
                            })
                    })
            }
        })
    }

    editLease = (id) => {
        this.props.onClickEdit(id)
    }

    render() {
        return (
            <div className="card col-lg-12 col-md-12 m-3">
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
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
                            {this.state.leases.map(lease => {
                                let starting = moment((new Date(`${lease.starting}`)).toString()).format('DD-MMM-YYYY').toString()
                                let ending = moment((new Date(`${lease.ending}`)).toString()).format('DD-MMM-YYYY').toString()
                                return <tr key={lease._id}>
                                    <td>{lease.property.reference}</td>
                                    <td>{starting}</td>
                                    <td>{ending}</td>
                                    <td>{lease.price}</td>
                                    <td>{lease.deposit}</td>
                                    {(lease.active) == false ?
                                        <td>
                                            <span className="badge badge-danger" >Closed</span>
                                        </td>
                                        :
                                        <td>
                                            <span className="badge badge-success">Active</span>
                                        </td>}
                                    <td className="pointer-cursor">
                                        <NavLink 
                                        onClick={(e)=> {e.preventDefault;
                                        this.editLease(lease._id)}}
                                        to="/back/admin/leases/edit">
                                            <Edit />
                                        </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Trash2 cursor="pointer"
                                            onClick={(e) => { e.preventDefault; { this.deleteLease(lease._id) } }}
                                        />

                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>




        )
    }
}


export default withRouter(LeasesList)