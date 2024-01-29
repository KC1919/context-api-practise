import { useContext } from "react";
import CounterContext from "../contexts/CounterContext";

const Cart = () => {

    const { count } = useContext(CounterContext);

    return (
        <div>
            <p>{count}</p>
        </div>
    )
}

export default Cart;