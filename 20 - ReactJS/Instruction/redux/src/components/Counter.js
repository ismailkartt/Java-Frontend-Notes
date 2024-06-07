import React from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../store/counter/counterSlice";

const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        if (event.target.id === "increment") {
            dispatch(increment());
        } else if (event.target.id === "decrement") {
            dispatch(decrement());
        } else if (event.target.id === "reset") {
            dispatch(reset());
        }
    };

    return (
        <Container>
            <h2>COUNTER</h2>
            <ButtonGroup>
                <Button id="decrement" variant="danger" onClick={handleClick}>
                    -
                </Button>
                <Button variant="secondary">{counter.value}</Button>
                <Button id="increment" variant="success" onClick={handleClick}>
                    +
                </Button>
                <Button id="reset" variant="warning" onClick={handleClick}>
                    RESET
                </Button>
            </ButtonGroup>
        </Container>
    );
};

export default Counter;
