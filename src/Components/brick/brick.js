import React from "react";
import './style.css';


const Brick = (props)=>{
    return(
        <div className="brick-container">
            <p>{props.name}</p>
        </div>
    )
}

export default Brick;