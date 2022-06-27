// import in react
import React from "react";
import ReactDom  from "react-dom";
import App from "./App";
import "./main.css";
import {BrowserRouter} from  "react-router-dom"; // npm i react-router-dom  to import this


// npm i bootstrap@5.0.1  to install bootstrap in react
ReactDom.render(
    <>
        <BrowserRouter>
            <App/>
            <h1/>
        </BrowserRouter>
    </>
, document.getElementById("root"))