import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {

    return (
        <div className="container-fluid landigpage-contain">
            <idiv className="landing-img" >
                <img style={{marginTop:"71px",width:"100vw"}} src="../landing.png"></img>
                <Link to="upload-form">
                <a className="start-writing-btn">Start Writing</a>
                </Link>
            </idiv>
            <div className="books-categories">
                
            </div>
        </div>
    )
}

export default LandingPage;
    