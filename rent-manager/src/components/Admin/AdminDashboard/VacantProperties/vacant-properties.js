import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import rentManagerApi from '../../../../api/api-client'

class VacantProperties extends Component {

    constructor(props) {
        super(props)
        this.state = {
            vacantProperties: []
        }
        
      }

    componentDidMount = () => {
        rentManagerApi.getPropertiesByStatus('free').then(properties => {
            this.setState({
                vacantProperties: properties
            })
        })
    }

    render() {
        return (
            <div className="card w-50 mr-lg-2">
                                <div className="card-title">
                                    <h4 className="text-center pt-3">VACANT PROPERTIES</h4>
                                </div>
                                <div className="card-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">PROPERTY</th>
                                                <th scope="col">ADDRESS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.vacantProperties.map(properties => {
                                                return  <tr key={properties._id}>
                                                            <td>{properties.reference}</td>
                                                            <td>{properties.address}</td>
                                                        </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
        )
    }
}


export default VacantProperties