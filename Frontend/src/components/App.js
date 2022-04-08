import React from "react";
import HomePage from "./HomePage";
import NavigationBar from "./NavigationBar";
import "./styling.css"
import axios from 'axios';
import AboutUs from "./AboutUs";
const App = () => {    
    return (
        <div>
            <NavigationBar></NavigationBar>
            {/* <HomePage></HomePage> */}
            <AboutUs></AboutUs>
        </div>
    );
}

export default App;
