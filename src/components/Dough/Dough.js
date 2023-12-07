import React from "react";
import "./Dough.css";

const Dough = (props) => {
    const { changeHandler } = props;

    return (
        <div>
            <label htmlFor="size-dropdown" className="fs-2 mt-5 mb-5">
                Hamur Seç <span className="fs-2 text-danger">*</span>
            </label>
            <br />
            <select
                name="dough"
                id="size-dropdown"
                defaultValue="default"
                onChange={changeHandler}
                className="border-0 rounded"
                data-cy="dough"
            >
                <option value="default" disabled>
                    -Hamur Seçiniz-
                </option>
                <option value="İnce Hamur">İnce Hamur</option>
                <option value="Normal Hamur">Normal Hamur</option>
                <option value="Kalın Hamur">Kalın Hamur</option>
            </select>
        </div>
    );
};

export default Dough;
