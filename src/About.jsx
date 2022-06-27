import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import Footer from "./Footer"
const About = () => {
    return (
        <>
            <Common subname="Hi i am raju dhakal. i am 26 years old and i am an web developer. i am currently working in facet technlogy pvt ltd." name="Let's know about me" imgsrc={require('./images/about.png')} visit="/contact" btname="Contact Now" />
            <Footer/>
        </>
    )
}
export default About;