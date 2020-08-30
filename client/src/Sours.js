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
                    <button className="options border">Lemon</button>
                    <button className="options border">Lime</button>
                    <button className="options border">Orange Liqueur</button>
                    <button className="options border">Egg White</button>
                    <button className="options border">Other</button>
                </div>

            </div>
        </div>
    )
}

export default Sours;