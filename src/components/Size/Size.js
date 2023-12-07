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
            <ButtonGroup>
                <Button
                    data-cy="small"
                    id="small"
                    outline
                    onClick={() => setOrder({ ...order, size: "S" })}
                    active={order.size === "S"}
                >
                    S
                </Button>
                <Button
                    data-cy="medium"
                    id="medium"
                    outline
                    onClick={() => setOrder({ ...order, size: "M" })}
                    active={order.size === "M"}
                >
                    M
                </Button>
                <Button
                    data-cy="large"
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
