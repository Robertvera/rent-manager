import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import rentManagerApi from '../../../../api/api-client'

class LeasesEnding extends Component {

    constructor(props) {
        super(props)
        this.state = {
            leasesEnding: []
        }
        
      }

    componentDidMount = () => {
        rentManagerApi.getLeasesEndingSoon().then(leases => {
            console.log(leases)
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
                                                <th scope="col">SINCE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>GUARDIA 4</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>LANCASTER</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>SANT PAU</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>LLEONA</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>BOT</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>MOLES</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>ROCA 1</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                            <tr>
                                                <td>GUARDIA 3</td>
                                                <td>24/07/2008</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
        )
    }
}


export default LeasesEnding