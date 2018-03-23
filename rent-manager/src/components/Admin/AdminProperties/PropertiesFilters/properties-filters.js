import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'

class PropertiesFilters extends Component {
    constructor(props) {
        super(props)
        // this.state = {

        // }
    }

    keepStatus = (status) => {
        this.props.onFilterByStatus(status)
    }

    keepHood = (hood) => {
        this.props.onFilterByNeighbourhood(hood)
    }

    keepInput = (query) => {
        this.props.onFilterByQuery(query)
    }

    render() {
        return (       
            <div className="card col-12 py-3">
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <select 
                        className="custom-select col-lg-2 col-md-5 col-sm-12" 
                        name="status"
                        onChange={(e)=> {this.keepStatus(e.target.value)}}
                        >
                            <option value="all">All</option>
                            <option value="free">Free</option>
                            <option value="busy">Busy</option>
                            <option value="booked">Booked</option>
                        </select>                                    
                        <select 
                        className="custom-select col-lg-2 col-md-5 col-sm-12" 
                        name="ending-date"
                        onChange={(e)=> {this.keepHood(e.target.value)}}
                        >
                            <option value="all">All</option>
                            <option value="Barceloneta">Barceloneta</option>
                            <option value="Born">Born</option>
                            <option value="Eixample">Eixample</option>
                            <option value="Gothic">Gothic</option>
                            <option value="Gracia">Gràcia</option>
                            <option value="Poble Nou">Poble Nou</option>
                            <option value="Raval">Raval</option>
                        </select>
                        <input 
                        type="text" 
                        className="form-control col-lg-2 col-md-5 col-sm-12" 
                        placeholder="Search by reference" 
                        onChange={(e)=> {this.keepInput(e.target.value)}}
                        />
                        <div className="col-lg-2 col-md-12 col-sm-12 p-0">
                            <NavLink to="properties/add"><button type="button" className="btn btn-success">+ Add new property</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default PropertiesFilters