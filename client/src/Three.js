import React, { Component } from "react";
import axios from "axios";
import './App.css';
import drink3 from "./assets/drink3.png"

export default class Three extends Component {
    constructor() {
        super();
        this.state = {
            ingredients: ""
        }
    }
    componentDidMount = () => {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let aparam = params.get('a');
        axios.get(`/Three/${aparam}`)
            .then(response => {
                // handle success
                this.setState({
                    ingredients: response.data
                })
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    }
    render() {
        return (
            <div className="row">
                <div className="col left">
                    <img className="graphic" src={drink3} />
                    <h1 className="category">Blended</h1>
                </div>
                <div className="col right">
                    <h2 className="question">Which ingredients do you want to use?</h2>
                    <div className="choices">
                        <button className="options border">{this.state.ingredients.ingredient1}</button>
                        <button className="options border">{this.state.ingredients.ingredient2}</button>
                        <button className="options border">{this.state.ingredients.ingredient3}</button>
                        <button className="options border">{this.state.ingredients.ingredient4}</button>
                        <button className="options border">{this.state.ingredients.ingredient5}</button>
                    </div>

                </div>
            </div>
        )
    }
}