import React, { Component } from 'react'
import firebase from 'firebase'

class FileUpload extends Component {
    constructor () {
        super()
        this.state={
            uploadValue: 0,
            picture: null
        }
    }

    handleUpload = (e) => {
        const file = e.target.files[0]
        const storageRef = firebase.storage().ref(`/pictures/${file.name}`)
        const task = storageRef.put(file)

        task.on('state_changed', snapshot => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            this.setState({
                uploadValue: percentage
            })
        }, error => {console.log(error.message)
        }, ()=> {
            this.setState({
                uploadValue: 100,
                picture: task.snapshot.downloadURL
            })
        })
    }


    render () {
        return(
            <div className="card-body col-lg-6 col-sm-12">
                <progress value={this.state.uploadValue} mx="100"></progress>
                <br/>
                <input type="file" onChange={this.handleUpload}/>
                <br/>
                <img width="320" src="this.state.picture" alt=""/>
            </div>
        )
    }

}



export default FileUpload