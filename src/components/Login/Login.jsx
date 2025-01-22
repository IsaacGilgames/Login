import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './Login.css';
import lock from '../../assets/img/lock_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import mail from '../../assets/img/mail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import person from '../../assets/img/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import { login_request } from "../../assets/scripts/login_request";
import { show_hide } from "../../assets/scripts/show_hide";



function Login(){
    const [user, setUser] = useState(null);


    function log_in(event){
        event.preventDefault();
        login_request(setUser);
    }



    return(
        <div className="wrapper">
            <h1>Bejelentkezés</h1>
            <form method="post" id="login" onSubmit={(e) => log_in(e)}>
                <div>
                    <label htmlFor="email-input">
                        <span>@</span>
                    </label>
                    <input type="email" name="email" id="email-input" placeholder="email"/>
                </div>
                <div>
                    <label htmlFor="password-input" onClick={() => show_hide("password-input")}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>                </label>
                    <input type="password" name="password" id="password-input" placeholder="password"/>
                </div>
                <button type="submit">Bejelentkezek</button>
            </form>
        </div>
    )
}

export default Login;