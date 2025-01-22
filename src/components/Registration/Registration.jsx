import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './Registration.css';

import lock from '../../assets/img/lock_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import mail from '../../assets/img/mail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import person from '../../assets/img/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import { show_hide } from "../../assets/scripts/show_hide";
import { validation } from "../../assets/scripts/validation";
import { request } from "../../assets/scripts/request";




function Registration(){

    function regist(event){
        event.preventDefault();
        request(validation());
    }



    return(
        <div className="wrapper">
            <h1>Regisztráció</h1>
            <form method="post" id="registration" onSubmit={(e) => regist(e)}>
                <div>
                    <label htmlFor="name-input">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                    </label>
                    <input type="text" name="name" id="name-input" placeholder="Gipsz Jakab"/>
                </div>
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
                <div>
                    <label htmlFor="repeat-password-input"  onClick={() => show_hide("repeat-password-input")}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>                </label>
                    <input type="password" name="repeat-password" id="repeat-password-input" placeholder="repeat password"/>
                </div>
                <button type="submit">Regisztrálás</button>
                
                <div className="error_box"></div>
            </form>
        </div>
    )
}

export default Registration;