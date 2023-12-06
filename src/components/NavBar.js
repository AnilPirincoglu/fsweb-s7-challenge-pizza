import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar py-0 ">
            <div className="container justify-content-around">

                <div className="text-start py-5"
                    style={{ width: 17.5 + "rem" }}>
                    <a className="navbar-brand me-0" href="#">
                        <img src={require("../assests/icons/1.svg")} alt="Pasta" className="d-inline-block me-5" />
                        <span style={{ fontSize: 1.8 + "rem" }}>YENİ! Kore</span>
                    </a>
                </div>

                <div className="text-start py-5"
                    style={{ width: 17.5 + "rem" }}>
                    <a className="navbar-brand me-0" href="#">
                        <img src={require("../assests/icons/2.svg")} alt="Pizza" className="d-inline-block me-5" />
                        <span style={{ fontSize: 1.8 + "rem" }}>Pizza</span>
                    </a>
                </div>

                <div className="text-start py-5"
                    style={{ width: 17.5 + "rem" }}>
                    <a className="navbar-brand me-0" href="#">
                        <img src={require("../assests/icons/3.svg")} alt="Burger" className="d-inline-block me-5" />
                        <span style={{ fontSize: 1.8 + "rem" }}>Burger</span>
                    </a>
                </div>

                <div className="text-start py-5"
                    style={{ width: 17.5 + "rem" }}>
                    <a className="navbar-brand me-0" href="#">
                        <img src={require("../assests/icons/4.svg")} alt="Fries" className="d-inline-block me-5" />
                        <span style={{ fontSize: 1.8 + "rem" }}>Kızartmalar</span>
                    </a>
                </div>

                <div className="text-start py-5"
                    style={{ width: 17.5 + "rem" }}>
                    <a className="navbar-brand me-0" href="#">
                        <img src={require("../assests/icons/5.svg")} alt="Fast Food" className="d-inline-block me-5" />
                        <span style={{ fontSize: 1.8 + "rem" }}>Fast Food</span>
                    </a>
                </div>

                <div className="text-start py-5"
                    style={{ width: 17.5 + "rem" }}>
                    <a className="navbar-brand me-0" href="#">
                        <img src={require("../assests/icons/6.svg")} alt="Drinks" className="d-inline-block me-5" />
                        <span style={{ fontSize: 1.8 + "rem" }}>Gazlı İçecek</span>
                    </a>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;