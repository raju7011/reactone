import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import Footer from "./Footer";

const Home = (props) => {
    return (
        <>
            <Common subname="Hi i am Raju an React developer" name="This is the React site By:" imgsrc={require('./images/writer.png')} visit="/service" btname="Get started"/>
            <Footer/>
        </>
    )
}
export default Home;