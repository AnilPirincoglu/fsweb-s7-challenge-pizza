import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom"
import "./OrderSummary.css";

const OrderSummary = (props) => {
    const { orderSummary } = props;

    useEffect(() => {
        console.log(orderSummary);
    }, [])

    return (
        <>
            <div id="summary" className="vh-100 vw-100 d-flex flex-column justify-content-evenly align-items-center pb-5">
                <Link to="/" className="mt-5">
                    <img src={require("../../assets/logos/logo.svg")} alt="" />
                </Link>
                <div>
                    <p className="mt-5 pt-5">lezzetin yolda</p>
                    <h2>SİPARİŞ ALINDI</h2>
                </div>

                <hr className="my-5 text-white w-50 opacity-100" />
                <h3>Position Absolute Acı Pizza</h3>
                <div className="w-50 d-flex flex-column align-content-center flex-wrap" >
                    <div className="text-start w-25">
                        <p className="fs-4 fw-light">Boyut:<span className="fs-4 ">{orderSummary.size}</span></p>
                        <p className="fs-4 fw-light">Hamur:<span className="fs-4">{orderSummary.dough}</span></p>
                        <p className="fs-4 fw-light mb-5">Ek Malzemeler: <span className="fs-4">{orderSummary.ingredients.toString()}</span></p>
                    </div>
                </div>



                <div
                    id="total"
                    className="fs-4 row-gap-3 d-flex flex-column border border-white p-5 my-5">
                    <h3 className="px-5">Sipariş Toplamı</h3>
                    <div className="d-flex justify-content-between fs-3">
                        <label>Adet</label>
                        <label>{orderSummary.count}</label>
                    </div>
                    <div className="d-flex justify-content-between fs-3">
                        <label>Seçimler</label>
                        <label>{orderSummary.extra}₺</label>
                    </div>
                    <div className="d-flex justify-content-between fs-3 pb-2">
                        <label>Toplam</label>
                        <label>{orderSummary.total.toFixed(2)}₺</label>
                    </div>
                </div>
            </div >
        </>
    );
}
export default OrderSummary;