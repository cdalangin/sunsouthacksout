import React from "react";
import './App.css';
import drink4 from "./assets/drink4.png"


function Old() {
    return (
        <div className="row">
            <div className="col left">
                <img className="graphic" src={drink4} />
                <h1 className="category">Old Fashioned</h1>
            </div>
            <div className="col right">
                <h2 className="question">Which ingredients do you want to use?</h2>
                <div className="choices">
                    <button className="options border">Apple</button>
                    <button className="options border">Cinnamon</button>
                    <button className="options border">Grapefruit</button>
                    <button className="options border">Orange</button>
                    <button className="options border">Blackberry</button>
                </div>

            </div>
        </div>
    )
}

export default Old;