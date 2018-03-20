import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'

class PropertyBox extends Component {
    render() {
        return (
            <div className="card col-lg-5 col-sm-12 m-3 p-0">
                <img className="card-img-top" src={this.props.picture} alt="Card image cap" />
                <div className="card-body pt-5">
                    <h6 className="card-title text-center">PROPERTY</h6>
                    <p className="card-text text-center">{this.props.address}</p>
                </div>
            </div>
        )
    }
}


export default PropertyBox


