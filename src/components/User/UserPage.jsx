import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';




function UserPage(){
    let UserData = JSON.parse(localStorage.getItem('user'));
    return(
    <div className="user">
        <h1>{UserData.Name}</h1>
    </div>
    )
}

export default UserPage;