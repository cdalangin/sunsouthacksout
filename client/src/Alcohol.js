import React from "react";
import './App.css';
import drink2 from "./assets/drink2.png"
import drink6 from "./assets/drink6.png"


function Alcohol() {
    return (
        <div className="cocktails">
            <div>
                <img className="twoOptions" src={drink2} />
                <a href="/FourChoices"><button value="cocktail" className="options border" href="/FourChoices">Cocktail</button></a>

            </div>
            <h1 class="or">Or</h1>
            <div>
                <img className="twoOptions" src={drink6} />
                <a href="/FourChoices"><button value="mocktail" className="options border">Mocktail</button></a>
            </div>
        </div>
    )
}

export default Alcohol;