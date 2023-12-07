import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom"
import Ingredients from "../Ingredients/Ingredients";
import Size from "../Size/Size";
import Dough from "../Dough/Dough";
import "./OrderForm.css";

const OrderForm = (props) => {

    const { setOrderSummary } = props;

    const initialOrder = {
        name: "",
        size: "",
        dough: "",
        ingredients: [],
        note: "",
    };

    const initialError = {
        name: "",
    };

    const history = useHistory();

    const [order, setOrder] = useState(initialOrder);
    const [count, setCount] = useState(1);

    const [formErrors, setFormErrors] = useState(initialError);
    const [isValid, setIsValid] = useState(false);

    const [extra, setExtra] = useState(0);
    const [total, setTotal] = useState(0)
    const price = 85.5;

    useEffect(() => {

        setTotal((price * count) + extra);

    }, [extra, count, order.ingredients])

    useEffect(() => {

        setExtra((5 * order.ingredients.length) * count)

    }, [order.ingredients, count])

    useEffect(() => {
        formSchema
            .isValid(order)
            .then((valid) => setIsValid(valid));
    }, [order]);

    const formSchema = Yup.object().shape({
        name: Yup.string()
            .required("İsim alanı boş bırakılamaz.")
            .min(2, "İsim en az 2 karakter olmalıdır"),
        size: Yup.string().required(),
        dough: Yup.string().required(),
        ingredients: Yup.array().required().max(10).min(4),
        note: Yup.string(),
    });

    const submitHandler = (event) => {
        event.preventDefault();
        if (isValid) {
            axios.post("https://reqres.in/api/users", order)
                .then(response => {

                    setOrderSummary({ ...response.data, ...{ "count": count, "extra": extra, "total": total } });
                    history.push("/summary");
                })
                .catch(eject => { console.log(eject); })
        }
    };

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setOrder({ ...order, [name]: value });

        Yup.reach(formSchema, name)
            .validate(value)
            .then((valid) => {
                setFormErrors({ ...formErrors, [name]: "" });
            })
            .catch((err) => {
                setFormErrors({ ...formErrors, [name]: err.errors[0] });
            });
    };

    return (
        <form
            id="pizza-form"
            className="text-start m-auto"
            onSubmit={submitHandler}
        >
            <div id="size-dough" className="mb-5">
                <Size order={order} setOrder={setOrder} />

                <Dough changeHandler={changeHandler} />
            </div>

            <h3 className="fs-2 fw-bold">Ek Malzemeler</h3>

            {order.ingredients.length < 4 && <p className="fs-4 fw-bold my-4 text-danger">En Az 4 Malzeme Seçmelisin.</p>}
            {order.ingredients.length >= 4 && order.ingredients.length <= 10 && <p className="fs-4 fw-medium my-4">En Fazla 10 malzeme seçebilirsin.</p>}
            {order.ingredients.length > 10 && <p className="fs-4 fw-bold my-4 text-danger">En Fazla 10 malzeme seçebilirsin.</p>}

            <Ingredients order={order} setOrder={setOrder} setExtra={setExtra} />

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
            <span className="fs-4 fw-bold my-4 text-danger">{formErrors.name}</span>
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
                    <button type="button"
                        className="fs-2 p-4 border-0"
                        onClick={() => setCount(count > 1 ? count - 1 : count)}
                    >
                        -
                    </button>
                    <label className="fs-2 p-4 border-0">{count}</label>
                    <button type="button"
                        className="fs-2 p-4 border-0"
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </button>
                </div>

                <div
                    id="result"
                    className="fs-4 row-gap-3 text-center mb-5 d-flex flex-column "
                >
                    <h3 className="pt-5">Sipariş Toplamı</h3>
                    <div className="d-flex justify-content-around fs-3">
                        <label>Seçimler</label>
                        <label>{extra}₺</label>
                    </div>
                    <div className="d-flex justify-content-around fs-3 pb-5">
                        <label>Toplam</label>
                        <label>{total.toFixed(2)}₺</label>
                    </div>

                    <button
                        type="submit"
                        className="border-0 rounded py-2"
                        disabled={!isValid}
                    >
                        Sipariş Ver
                    </button>
                </div>
            </div>
        </form>
    );
};

export default OrderForm;
