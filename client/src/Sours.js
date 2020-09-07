import React from "react";
import './App.css';
import drink5 from "./assets/drink5.png"


function Sours() {
    return (
        <div className="row">
            <div className="col left">
                <img className="graphic" src={drink5} />
                <h1 className="category">Sours</h1>
            </div>
            <div className="col right">
                <h2 className="question">Which ingredients do you want to use?</h2>
                <div className="choices">
                    <button value="lemon" className="options border">Lemon</button>
                    <button value="lime" className="options border">Lime</button>
                    <button value="orange" className="options border" style={{ fontSize: 14 }}>Orange Liqueur</button>
                    <button value="egg" className="options border">Egg White</button>
                    <button value="grapefruit" className="options border">Grapefruit</button>
                </div>

            </div>
        </div>
    )
}

export default Sours;