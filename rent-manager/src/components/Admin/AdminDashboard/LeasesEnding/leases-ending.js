import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import rentManagerApi from '../../../../api/api-client'
import moment from 'moment'

class LeasesEnding extends Component {

    constructor(props) {
        super(props)
        this.state = {
            leasesEnding: []
        }
        
      }

    componentDidMount = () => {
        rentManagerApi.getLeasesEndingSoon().then(leases => {            
            this.setState({
                leasesEnding: leases
            })
        })
    }

    render() {
        return (
            <div className="card w-50 ml-lg-2">
                                <div className="card-title">
                                    <h4 className="text-center pt-3">LEASES ENDING SOON</h4>
                                </div>
                                <div className="card-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">PROPERTY</th>
                                                <th scope="col">ENDING DATE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.leasesEnding.map(lease => {
                                                let endingDate = moment((new Date(`${lease.ending}`)).toString()).format('DD-MMM-YYYY').toString()
                                                return  <tr key={lease._id}>
                                                            <td>{lease.property.reference}</td>
                                                            <td>{endingDate}</td>
                                                        </tr>
                                            })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
        )
    }
}


export default LeasesEnding