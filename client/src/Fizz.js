import React from "react";
import './App.css';
import drink1 from "./assets/drink1.png"


function Fizz() {
    return (
        <div className="row">
            <div className="col left">
                <img className="graphic" src={drink1} />
                <h1 className="category">Fizzy</h1>
            </div>
            <div className="col right">
                <h2 className="question">Which ingredients do you want to use?</h2>
                <div className="choices">
                    <button className="options border">Lemon</button>
                    <button className="options border">Soda</button>
                    <button className="options border">Grapefruit</button>
                    <button className="options border">Cucumber</button>
                    <button className="options border">Mint</button>
                </div>
            </div>
        </div>
    )
}

export default Fizz;