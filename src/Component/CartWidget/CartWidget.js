import "./CartWidget.css"
import { useContext } from "react";
import { context } from "../../App";
import { Link } from "react-router-dom";

const CartWidget= ()=>{

    const {getTotalQuantity} = useContext(context)

    const totalProduct = getTotalQuantity()

    return(
        <div>
            <Link to={`/cart`}>
                <img className="cart" src="/images/cart-removebg-preview.png" alt="cart" />
            </Link> 
                {totalProduct}
        </div>
    )
};

export default CartWidget
