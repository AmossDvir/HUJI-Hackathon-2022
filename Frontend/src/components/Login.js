import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("Amoss");
    return (
        <div>
            <h2>Enter Username1: <input onChange={(e) => {setUsername(e.target.value)}} value={username}></input></h2>
            <label>{username}</label>
        </div>
    )
};

export default Login;