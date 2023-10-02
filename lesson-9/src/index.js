import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCWwS8m67Ylh954M-ChwWHNe5BS2UxWd1c",
  authDomain: "crudproject-4da75.firebaseapp.com",
  databaseURL: "https://crudproject-4da75-default-rtdb.firebaseio.com",
  projectId: "crudproject-4da75",
  storageBucket: "crudproject-4da75.appspot.com",
  messagingSenderId: "890206458509",
  appId: "1:890206458509:web:6124d82dc79cf58ec8c8c4",
  measurementId: "G-6MF3Y2LL8E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
