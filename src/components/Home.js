import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import HomeCategory from "./LandingPage/HomeCategory";
import Sliders from "./Sliders/Sliders";
function Home (){
    return(
<>
        <LandingPage></LandingPage>
        <HomeCategory></HomeCategory>
        <Sliders></Sliders>
        </>
    )
 }
 export default Home;