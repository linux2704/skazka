import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyDKK9ojaKxvMC7yrxAUmuh8UbyD6FYqEuQ",
  authDomain: "skazkindom-3b02e.firebaseapp.com",
  projectId: "skazkindom-3b02e",
  storageBucket: "skazkindom-3b02e.appspot.com",
  messagingSenderId: "1041917605489",
  appId: "1:1041917605489:web:73fb54a3ac3d751a7d0dd0",
  measurementId: "G-WG96SPMYMH",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
