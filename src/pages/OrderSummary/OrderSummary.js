import React from "react";

const OrderSummary = (props) => {
    const { orderSummary } = props;
    console.log(orderSummary);
    return (
        <>
            <div className="vh-100 vw-100 bg-danger d-flex flex-column justify-content-center align-items-center">
                <div>
                    <img src={require("../../assets/logos/logo.svg")} />
                </div>
                <p>lezzetin yolda</p>
                <h2>SİPARİŞİN ALINDI</h2>
                <hr />

            </div>
        </>
    );
}
export default OrderSummary;