import React from "react";
import './Sours.css';
import drink1 from "./drink1.png"

function Sours() {
    return (
        <>
            <div class="panelA">
                <img src={drink1} className="sours" alt="sours" />
                <h2>Which ingredients do you want to use?</h2>
            </div>
            <div>
                <h1>Buttons</h1>
            </div>
        </>
    )
}

export default Sours;