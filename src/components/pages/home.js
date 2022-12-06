import React from "react";
import AboutUs from "../aboutus";
import Footer from "../footer";

function Home(props) {
    return (
        <>
            <AboutUs/>
            <Footer backend={props.backend}/>
        </>
    )
}

export default Home