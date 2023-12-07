import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import "./Size.css";

const Size = (props) => {
    const { order, setOrder } = props;

    return (
        <div id="size">
            <label htmlFor="size-radio" className="fs-2 mt-5 mb-5">
                Boyut Seç <span className="text-danger fs-2">*</span>{" "}
            </label>
            <br />
            <ButtonGroup id="">
                <Button
                    id="small"
                    outline
                    onClick={() => setOrder({ ...order, size: "S" })}
                    active={order.size === "S"}
                >
                    S
                </Button>
                <Button
                    id="medium"
                    outline
                    onClick={() => setOrder({ ...order, size: "M" })}
                    active={order.size === "M"}
                >
                    M
                </Button>
                <Button
                    id="large"
                    outline
                    onClick={() => setOrder({ ...order, size: "L" })}
                    active={order.size === "L"}
                >
                    L
                </Button>
            </ButtonGroup>
        </div>
    );
};
export default Size;
