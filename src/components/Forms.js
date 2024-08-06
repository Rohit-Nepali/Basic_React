import React, { useState } from 'react';
import "./customCSS.css";

function Forms() {

    //making forms
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Loging in with ${username} and ${password}`);
    }

    function updateUsername(event) {
        setUsername(event.target.value);
    }

    function updatePassword(event) {
        setPassword(event.target.value);
    }

    return (
        <div class="container mt-5 custom-height">
            <form class="w-50 mx-auto mg">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" placeholder="Username" onChange={updateUsername} />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password" onChange={updatePassword} />
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>

    )
}

export default Forms
