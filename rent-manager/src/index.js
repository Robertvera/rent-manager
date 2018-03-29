import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import './index.css';
import App from './App';

firebase.initializeApp({
    apiKey: "AIzaSyCI5WnPvTYB-Zr91vkFNxRG02lncfsE99Q",
    authDomain: "rent-manager-22805.firebaseapp.com",
    databaseURL: "https://rent-manager-22805.firebaseio.com",
    projectId: "rent-manager-22805",
    storageBucket: "rent-manager-22805.appspot.com",
    messagingSenderId: "1089219794248"
})

ReactDOM.render(<App />, document.getElementById('root'));