import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar py-0 ">
            <div className="container justify-content-around">

                <div className="text-start py-5"
                    style={{ width: 17.5 + "rem" }}>
                    <Link className="navbar-brand me-0" to="/">
                        <img src={require("../assets/icons/1.svg")} alt="Pasta" className="d-inline-block me-5" />
                        <span style={{ fontSize: 1.8 + "rem" }}>YENİ! Kore</span>
                    </Link>
                </div>

                <div className="text-start py-5"
                    style={{ width: 17.5 + "rem" }}>
                    <Link className="navbar-brand me-0" to="/">
                        <img src={require("../assets/icons/2.svg")} alt="Pizza" className="d-inline-block me-5" />
                        <span style={{ fontSize: 1.8 + "rem" }}>Pizza</span>
                    </Link>
                </div>Link
                <div className="text-start py-5"
                    style={{ width: 17.5 + "rem" }}>
                    <Link className="navbar-brand me-0" to="/">
                        <img src={require("../assets/icons/3.svg")} alt="Burger" className="d-inline-block me-5" />
                        <span style={{ fontSize: 1.8 + "rem" }}>Burger</span>
                    </Link>
                </div>

                <div className="text-start py-5"
                    style={{ width: 17.5 + "rem" }}>
                    <Link className="navbar-brand me-0" to="/">
                        <img src={require("../assets/icons/4.svg")} alt="Fries" className="d-inline-block me-5" />
                        <span style={{ fontSize: 1.8 + "rem" }}>Kızartmalar</span>
                    </Link>
                </div>

                <div className="text-start py-5"
                    style={{ width: 17.5 + "rem" }}>
                    <Link className="navbar-brand me-0" to="/">
                        <img src={require("../assets/icons/5.svg")} alt="Fast Food" className="d-inline-block me-5" />
                        <span style={{ fontSize: 1.8 + "rem" }}>Fast Food</span>
                    </Link>
                </div>

                <div className="text-start py-5"
                    style={{ width: 17.5 + "rem" }}>
                    <Link className="navbar-brand me-0" to="/">
                        <img src={require("../assets/icons/6.svg")} alt="Drinks" className="d-inline-block me-5" />
                        <span style={{ fontSize: 1.8 + "rem" }}>Gazlı İçecek</span>
                    </Link>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;