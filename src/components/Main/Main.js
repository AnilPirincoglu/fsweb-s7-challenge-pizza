import React from "react";
import "./Main.css";

const Main = () => {
    return (
        <main className="pb-5">
            <div className="container text-start d-flex gap-3 ">
                <div id="pizza-card" className="product-card">
                    <div className="card-padding">
                        <h2>
                            Özel
                            <br /> Lezzetus
                        </h2>
                        <p>Position:Absolute Acı Burger</p>
                        <button className="order-btn">Sipariş Ver</button>
                    </div>
                </div>
                <div>
                    <div id="burger-card" className="product-card card-padding">
                        <h2>
                            Hackathlon <br />
                            Burger Menü
                        </h2>
                        <button className="order-btn">Sipariş Ver</button>
                    </div>
                    <div id="courier-card" className="product-card card-padding">
                        <h2>
                            <span className="red-text">Çoooook</span> hızlı <br />
                            npm gibi kurye
                        </h2>
                        <button className="order-btn">Sipariş Ver</button>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Main;
