import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./PizzaOrder.css";
import Ingredients from "../../components/Ingredients/Ingredients";

const PizzaOrder = () => {
    const orderObject = {
        name: "",
        size: "",
        curst: "",
        ingredients: [],
        note: "",
    };

    const price = "85.50";

    const [order, setOrder] = useState(orderObject);

    const [count, setCount] = useState(1);

    const submitHandler = (event) => {
        event.preventDefault();
    };

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setOrder({ ...order, [name]: value });
    };

    useEffect(() => {
        console.log(order);
    })
    return (
        <>
            <div id="order-banner">
                <div>
                    <img src={require("../../assets/logos/logo.svg")} />
                </div>
            </div>

            <section id="intro">
                <div className="text-start m-auto">
                    <nav>
                        <Link to="/" className="text-decoration-none text-dark size-sixteen">
                            Ana Sayfa-
                        </Link>
                        <span className="size-sixteen text-danger"> Sipariş Oluştur</span>
                    </nav>

                    <h2 id="pizza-name">Position Absulute Pizza</h2>
                    <div>
                        <span id="price" className="fw-bold">{price}₺</span>
                        <span className="size-sixteen fw-light">4.9 (200)</span>
                    </div>

                    <p className="size-sixteen fw-light pb-5">
                        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
                        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
                        diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
                        ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
                        yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
                        kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
                        denir.
                    </p>
                    <Ingredients order={order} setOrder={setOrder} />
                </div>
            </section>
        </>
    );
}

export default PizzaOrder;