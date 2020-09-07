import React, { Component } from "react";
import './App.css';
import drink2 from "./assets/drink2.png"
import drink6 from "./assets/drink6.png"

export default class Alcohol extends Component {
    constructor() {
        super();
        this.state = {
            alcoholic: "Alcoholic",
            Non_alcoholic: "Non_alcoholic",
            url1: "",
            url2: ""
        }
    }
    componentDidMount = () => {
        this.setState({
            url1: `/FourChoices?a=${this.state.alcoholic}`,
            url2: `/FourChoices?a=${this.state.Non_alcoholic}`
        })
    }
    render() {
        return (
            <div className="cocktails">
                <div>
                    <img className="twoOptions" src={drink2} />
                    <a href={this.state.url1}><button className="options border" href="/FourChoices">Cocktail</button></a>

                </div>
                <h1 className="or">Or</h1>
                <div>
                    <img className="twoOptions" src={drink6} />
                    <a href={this.state.url2}><button className="options border">Mocktail</button></a>
                </div>
            </div>
        )
    }
}