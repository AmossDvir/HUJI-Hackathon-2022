import React from "react";
import HomePage from "./HomePage";
import "./styling.css"
import axios from 'axios';
import Map from "./Map";
const App = () => {
    const  makeReq = async () => {const {data} = await axios.get('http://127.0.0.1:8000/locations/');
    console.log(data);
}

    makeReq()
    
    return (
        <div>
            <HomePage></HomePage>
        </div>
    );
}

export default App;
