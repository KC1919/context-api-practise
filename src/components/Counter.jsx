import { useContext, useState } from "react";
import CounterContext from "../contexts/CounterContext";

const Counter = () => {

    const { count, setCount } = useContext(CounterContext);

    function handleIncrement(e) {
        setCount(count + 1);
    }

    function handleDecrement(e) {
        setCount(count - 1);
    }

    return (
        <div>
            <button onClick={handleIncrement}>
                +
            </button>

            <p>{count}</p>
            <button onClick={handleDecrement}>
                -
            </button>
        </div>
    )
}

export default Counter;