import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import moment from 'moment'

class LeaseEnding extends Component {
    render() {
        let endingDate = (new Date(this.props.ending)).toString()
        return (
            <div className="card col-12 col-lg-5 col-md-5 mx-3 mb-5" id="ending-date">
                <div className="card-body">
                    <h6 className="card-title text-center">ENDING DATE</h6>
                    <p className="card-text numbers text-center">{moment(endingDate).format('DD-MMM-YYYY').toString()}</p>
                </div>
            </div>
        )
    }
}


export default LeaseEnding

