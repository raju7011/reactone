import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Detail from "./Detail";


const App = () =>{
    return (
        <>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/service" component={Service}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route exact path="/detail" component={Detail}></Route>
                <Redirect to= "/"></Redirect>
            </Switch>
        </>
    )
}

export default  App;