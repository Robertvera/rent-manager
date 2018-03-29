import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import { Trash2, Edit } from 'react-feather'

class OwnersFilters extends Component {

    constructor(props) {
        super(props)
        // this.state = {


        // }
    }

    keepQuery = (query) => {
        this.props.onFilterByQuery(query)
    }

    render() {
        
        return (
            <div className="card col-10 py-3">
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <input 
                        type="text" 
                        className="form-control col-lg-2 col-md-5 col-sm-12" 
                        placeholder="Search by name" 
                        onChange={(e)=> {this.keepQuery(e.target.value)}}
                        />
                        <div className="col-lg-2 col-md-12 col-sm-12 p-0 mx-3">
                            <NavLink to="owners/add"><button type="button" className="btn btn-success">+ Add new owner</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default OwnersFilters