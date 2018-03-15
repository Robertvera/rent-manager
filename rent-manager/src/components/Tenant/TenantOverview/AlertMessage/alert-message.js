import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'

class AlertMessage extends Component {
    render() {
        return (
            <div className="alert alert-danger col-11 text-center" role="alert">
                You have pending payments
            </div>            
        )
    }
}


export default AlertMessage


