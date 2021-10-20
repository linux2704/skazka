import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Router } from "router";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { BrowserRouter } from "react-router-dom";

const config = {
  apiKey: "AIzaSyCMg2tKhj3WvLB2Azm6ty6JOwOqAmvL_DI",
  authDomain: "skazka-1911f.firebaseapp.com",
  projectId: "skazka-1911f",
  storageBucket: "skazka-1911f.appspot.com",
  messagingSenderId: "316258142402",
  appId: "1:316258142402:web:babc8ba419ec5fd515935b",
  measurementId: "G-0GNPBD3P9T",
  databaseURL: "https://skazka-1911f-default-rtdb.europe-west1.firebasedatabase.app/",
};

// initializeApp(config);

export const app = initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
