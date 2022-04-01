import React, {useState} from "react";

const Login = () =>{
    const [username, setUsername] = useState("Amoss");
    return (
        <div>
            <h2>Enter UserName: <input onChange = {(e) => {setUsername(e.target.value)}} value={username} placeholder="enter 6-8 characters"></input> </h2>
            <label>{username}</label>
        </div>
    );

};

export default Login;