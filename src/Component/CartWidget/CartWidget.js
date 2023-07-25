import "./CartWidget.css"
import { useContext } from "react";
import { CartContext } from "../../context/CarContex";
import { Link } from "react-router-dom";

const CartWidget= ()=>{

    const {getTotalQuantity} = useContext(CartContext)

    const totalProduct = getTotalQuantity()

    return(
        <div>
            <Link to={`/cart`}>
                <img className="cart" src="/images/cart-removebg-preview.png" alt="cart" />
            </Link > 
                <span className="badge " id="badge-count">
                {totalProduct}
                </span>
        </div>
    )
};

export default CartWidget
