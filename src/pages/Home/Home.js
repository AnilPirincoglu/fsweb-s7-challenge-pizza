import React from "react";
import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/NavBar";
import Main from "../../components/Main/Main"
import "./Home.css";

const Home = () => {
    return (
        <>
            <Hero />
            <NavBar />
            <Main />
        </>
    );
}

export default Home;