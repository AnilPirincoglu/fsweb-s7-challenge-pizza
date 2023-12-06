import React from "react";
import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/NavBar";
import Main from "../../components/Main/Main"
import "./Home.css";
import Card from "../../components/Card/Card";

const Home = () => {

    const products = [{
        url: 'food-1.png',
        name: "Terminal Pizza",
        point: 4.9,
        comment: 200,
        price: 60
    },
    {
        url: "food-2.png",
        name: "Position Absolute Acı Pizza",
        point: 4.9,
        comment: 928,
        price: 85
    },
    {
        url: "food-3.png",
        name: "Position Absolute Acı Pizza",
        point: 4.9,
        comment: 462,
        price: 75
    }];

    return (
        <>
            <Hero />
            <NavBar />
            <Main />
            <section id="products">
                <p>en cok paketlenen menüler</p>
                <h2 className="mb-5">Acıktıran Kodlara Doyuran Lezzetler</h2>
                <nav className="container d-flex justify-content-between flex-wrap gap-3 mb-5 ">
                    <button ><img src={require("../../assets/icons/1.svg")} alt="" /> Ramen</button>
                    <button ><img src={require("../../assets/icons/2.svg")} alt="" /> Pizza</button>
                    <button ><img src={require("../../assets/icons/3.svg")} alt="" /> Burger</button>
                    <button ><img src={require("../../assets/icons/4.svg")} alt="" /> French Fries</button>
                    <button ><img src={require("../../assets/icons/5.svg")} alt="" /> Fast Food</button>
                    <button ><img src={require("../../assets/icons/6.svg")} alt="" /> Soft Drinks</button>
                </nav>
                <div id="card-div" className="d-flex flex-wrap gap-4 justify-content-center">
                    {products.map((item, index) => <Card key={index} url={item.url} name={item.name} point={item.point} comment={item.comment} price={item.price} />)}
                </div>

            </section>

        </>
    );
}

export default Home;