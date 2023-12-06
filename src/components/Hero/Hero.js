import React from "react";
import { useHistory } from "react-router-dom";
import "./Hero.css"

const Hero = () => {

    const history = useHistory();

    const clickHandler = () => {
        history.push("/pizza")
    };

    return (
        <section id="hero">
            <div className="container">
                <img className="py-5" src={require("../../assests/logos/logo.svg")} alt="hero-img" />
                <p className="hero-p1">fırsatı kaçırma</p>
                <h2 className="hero-p2">KOD ACIKTIRIR <br />PIZZA, DOYURUR</h2>
            </div>
            <button id="order-pizza" onClick={clickHandler}>ACIKTIM</button>
        </section>
    );

};

export default Hero;
