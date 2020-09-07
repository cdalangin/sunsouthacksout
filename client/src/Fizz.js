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
                    <button value="lemon" className="options border">Lemon</button>
                    <button value="pineapple" className="options border">Pineapple</button>
                    <button value="grapefruit" className="options border">Grapefruit</button>
                    <button value="cucumber" className="options border">Cucumber</button>
                    <button value="mint" className="options border">Mint</button>
                </div>
            </div>
        </div>
    )
}

export default Fizz;