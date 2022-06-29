import React from "react";
import { NavLink } from "react-router-dom";

const Card = () => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img className="card-img-top" src={require('./images/writer.png')} alt="Card image cap" />
                    <div className="card-body">
                        <NavLink className="servicelink" to='/detail'><h5 className="card-title">Web developement</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nostrum.</p></NavLink>
                    </div>
                </div>
            </div><div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img className="card-img-top" src={require('./images/hosting.png')} alt="Card image cap" />
                    <div className="card-body">
                    <NavLink className="servicelink" to='/detail'>
                        <h5 className="card-title">Web hosting</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nostrum.</p>
                    </NavLink>
                    </div>
                </div>
            </div><div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img className="card-img-top" src={require('./images/engineering.png')} alt="Card image cap" />
                    <div className="card-body">
                    <NavLink className="servicelink" to='/detail'>
                        <h5 className="card-title">Engineering Team</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nostrum.</p>
                        </NavLink>
                    </div>
                </div>
            </div><div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img className="card-img-top" src={require('./images/design.png')} alt="Card image cap" />
                    <div className="card-body">
                    <NavLink className="servicelink" to='/detail'>
                        <h5 className="card-title">Web design</h5>
                         <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nostrum.</p>
                    </NavLink>
                    </div>
                </div>
            </div><div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img className="card-img-top" src={require('./images/game.png')} alt="Card image cap" />
                    <div className="card-body">
                    <NavLink className="servicelink" to='/detail'>
                        <h5 className="card-title">Game developement</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nostrum.</p>
                    </NavLink>
                    </div>
                </div>
            </div><div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img className="card-img-top" src={require('./images/testing.png')} alt="Card image cap" />
                    <div className="card-body">
                    <NavLink className="servicelink" to='/detail'>
                        <h5 className="card-title">Good testing developement</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nostrum.</p>
                    </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;