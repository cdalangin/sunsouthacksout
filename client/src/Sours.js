import React from "react";
import './Sours.css';
import drink1 from "./assets/drink1.png"
import Button from "./components/Button"

function Sours() {
    return (
        <div className="row">
            <div className="col left">
                <img className="sours" src={drink1} />
                <h1>Sours</h1>
            </div>
            <div className="col right" style={{ textAlign: "left" }}>
                <h2>Which ingredients do you want to use?</h2>
                <Button />
            </div>
        </div>
    )
}

export default Sours;