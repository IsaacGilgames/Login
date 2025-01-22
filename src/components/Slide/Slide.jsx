import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './Slide.css';



function Slide(){
    return(
    <div className="slide">
        <div className="slideThree">  
            <input type="checkbox" value="None" id="slideThree" name="check" checked />
            <label htmlFor="slideThree"></label>
        </div>
    </div>
    )
}

export default Slide();
