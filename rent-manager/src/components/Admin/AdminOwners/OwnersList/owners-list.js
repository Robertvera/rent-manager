import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import { Trash2, Edit } from 'react-feather'
import rentManagerApi from '../../../../api/api-client'
import swal from 'sweetalert2'

class OwnersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            owners: []

        }
    }

    componentDidMount = () => {
        rentManagerApi.getOwners()
            .then(owners => {
                this.setState({ owners })
            })
    }

    componentWillReceiveProps = (nextProps) => {

        rentManagerApi.getOwnerSearch(nextProps.query)
            .then(filteredOwners => {
                this.setState({ owners: filteredOwners })
            })

    }

    // ownerProperties = (ownerId) => {        
    //     for (let i = 0; i < this.state.owners.length; i ++) {
    //         rentManagerApi.getPropertiesByOwner(ownerId)
    //             .then(properties => {
    //                 this.setState(
    //                     this.state.owners[i].properties = properties
    //                     )                        
    //             })            
    //     }
    // }

    editOwner = (id) => {
        this.props.onClickEdit(id)
    }

    deleteOwner = (id) => {
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
                rentManagerApi.deleteOwner(id)
                    .then(() => {
                        swal({
                            title: 'Owner deleted!',
                            type: 'success',
                            showConfirmButton: false,
                            timer: 2000,
                            onOpen: () => {
                                swal.showLoading()
                            }
                        })
                            .then(() => {
                                rentManagerApi.getOwners()
                                    .then(owners => {
                                        this.setState({ owners })
                                    })
                            })
                    })
            }
        })
    }

    render() {
        // {this.state.owners && !this.state.owners.properties? this.ownerProperties():undefined}

        return (
            <div className="card col-lg-12 col-md-12 m-3">
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">NAME</th>
                                <th scope="col">E-MAIL</th>
                                <th scope="col">TELEPHONE NUMBER</th>
                                <th scope="col">BANK ACCOUNT</th>
                                <th scope="col" />
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.owners ?

                                this.state.owners.map(owner => {
                                    return <tr key={owner.documentId}>
                                        <td>{owner.name} {owner.surname}</td>
                                        <td>{owner.email}</td>
                                        <td>{owner.phoneNumber}</td>
                                        <td>{owner.bankAccount}</td>
                                        <td className="pointer-cursor">
                                            <NavLink
                                                onClick={(e) => {
                                                    e.preventDefault;
                                                    this.editOwner(owner.documentId)
                                                }}
                                                to="/back/admin/owners/edit">
                                                <Edit />
                                            </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <Trash2 cursor="pointer"
                                                onClick={(e) => { e.preventDefault; { this.deleteOwner(owner.documentId) } }}
                                            />

                                        </td>
                                    </tr>
                                })

                                : undefined
                            }



                        </tbody>
                    </table>
                </div>
            </div>



        )
    }
}


export default OwnersList