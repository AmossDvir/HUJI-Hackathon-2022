import React from "react";
import Login from "./Login";
import "./styling.css"
import axios from 'axios';
const App = () => {
    const  makeReq = async () => {const {data} = await axios.get('http://127.0.0.1:8000/locations/');
    console.log(data);
}

    makeReq()
    
    return (
        <div>
            {/* <Login></Login> */}
        </div>
    );
}

export default App;
