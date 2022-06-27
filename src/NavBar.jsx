import React from "react";
import {NavLink} from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-12">
            <nav class="navbar navbar-expand-lg navbar-royalblue bg-light">
              <NavLink exact className="navbar-brand text-uppercase logo" to="/"><img src={require('./images/logo.png')}/></NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  mr-5 na">
                  <li className="nav-item">
                    <NavLink activeClassName='menu_active' exact className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName='menu_active' exact className="nav-link" to="/service">services</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName='menu_active' exact className="nav-link" to="/about">about</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName='menu_active' exact className="nav-link" to="/contact">contact</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;

