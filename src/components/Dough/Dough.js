import React from "react";
import "./Dough.css";


const Dough = (props) => {
    const { changeHandler } = props;

    return (
        <div>
            <label htmlFor="select-dough" className="fs-2 mt-5 mb-5">
                Hamur Seç <span className="fs-2 text danger">*</span>
            </label>
            <br />
            <select name="dough" id="select-dough" defaultValue="default" onChange={changeHandler}>
                <option value="default" disabled>-Hamur Seçiniz-</option>
                <option value="thin">İnce Hamur</option>
                <option value="regular">Normal Hamur</option>
                <option value="thick">Kalın Hamur</option>
            </select>
        </div>
    );
};

export default Dough;
