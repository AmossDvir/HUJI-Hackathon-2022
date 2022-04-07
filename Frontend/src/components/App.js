import React from "react";
import HomePage from "./HomePage";
import NavigationBar from "./NavigationBar";
import "./styling.css"
import axios from 'axios';
import Map from "./Map";
const App = () => {
    const  makeReq = async () => {const {data} = await axios.get('http://127.0.0.1:8000/Hospital/');
    console.log(data);
}

    makeReq()
    
    return (
        <div>
            <NavigationBar></NavigationBar>
            <HomePage></HomePage>
        </div>
    );
}

export default App;
