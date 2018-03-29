import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'

class RentalPrice extends Component {
    render() {
        return (
            <div className="card col-12 my-3">
                <div className="card-body">
                    <h6 className="card-title text-center">RENTAL PRICE</h6>
                    <p className="card-text numbers text-center">{this.props.price} €/mo</p>
                </div>
            </div>
        )
    }
}


export default RentalPrice





