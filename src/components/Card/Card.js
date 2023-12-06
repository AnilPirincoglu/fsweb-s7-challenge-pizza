import React from "react";
import "./Card.css";

const Card = (props) => {

    const { url, name, point, comment, price } = props;

    return (
        <div className="card d-flex flex-column align-items-center justify-content-around">
            <img src={require(`../../assets/images/${url}`)} alt="" className="" />
            <div className="container">
                <h4>{name}</h4>
            </div>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <span>{point}</span>
                    <span>({comment})</span>
                    <span id="card-price">{price}₺</span>
                </div>
            </div>

        </div >
    );
}

export default Card;