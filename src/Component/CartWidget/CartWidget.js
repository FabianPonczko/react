import "./CartWidget.css"
import { useContext } from "react";
import { context } from "../../App";

const CartWidget= ()=>{

    const {getTotalQuantity} = useContext(context)

    const totalProduct = getTotalQuantity()

    return(
        <div>
            <img className="cart" src="/images/cart-removebg-preview.png" alt="cart" />
        {totalProduct}
        </div>
    )
};

export default CartWidget
