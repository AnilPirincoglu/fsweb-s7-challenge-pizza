import React, { useEffect, useState } from "react";
import Ingredients from "../Ingredients/Ingredients";
import "./OrderForm.css";
import Size from "../Size/Size";
import Dough from "../Dough/Dough";

const OrderForm = (props) => {
    const orderObject = {
        name: "",
        size: "",
        dough: "",
        ingredients: [],
        note: "",
    };

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
    });

    return (
        <form id="order-form" className="text-start m-auto">
            <div id="size-dough" className="mb-5">
                <Size order={order} setOrder={setOrder} />

                <Dough changeHandler={changeHandler} />
            </div>

            <h3 className="fs-2 fw-bold">Ek Malzemeler</h3>
            <p className="fs-4 fw-medium my-4">
                En Fazla 10 malzeme seçebilirsiniz. 5₺
            </p>

            <Ingredients order={order} setOrder={setOrder} />

            <label className="fs-2 mt-5" htmlFor="name-input">
                İsim :
            </label>
            <br />
            <input
                className="fs-4 w-100 py-3 rounded border-0 mt-3"
                type="text"
                id="name-input"
                name="name"
                value={order.name}
                onChange={changeHandler}
                placeholder="İsim Giriniz:"
            />
            <br />

            <label className="fs-2 mt-5" htmlFor="special-text">
                Sipariş Notu :
            </label>
            <br />
            <input
                className="fs-4 w-100 py-3 rounded border-0 mt-3"
                id="special-text"
                type="text"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                name="note"
                value={order.note}
                onChange={changeHandler}
            />

            <hr className="my-5" />

            <div className="d-flex justify-content-around">
                <div>
                    <button className="fs-2 p-4 border-0" onClick={() => setCount(count - 1)}>
                        -
                    </button>
                    <label className="fs-2 p-4 border-0">{count}</label>
                    <button className="fs-2 p-4 border-0" onClick={() => setCount(count + 1)}>
                        +
                    </button>
                </div>

                <div id="result" className="fs-4 row-gap-3 text-center mb-5 d-flex flex-column ">
                    <h3 className="pt-5">Sipariş Toplamı</h3>
                    <div className="d-flex justify-content-around fs-3">
                        <label>Seçimler</label>
                        <label>25</label>
                    </div>
                    <div className="d-flex justify-content-around fs-3 pb-5">
                        <label>Toplam</label>
                        <label>110</label>
                    </div>

                    <button type="submit" className="border-0 rounded ">Sipariş Ver</button>
                </div>
            </div>
        </form>
    );
};

export default OrderForm;
