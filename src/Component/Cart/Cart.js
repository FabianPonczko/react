import {useContext} from "react";
import { CartContext } from "../../context/CarContex";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import './Cart.css'

const Cart = ()=>{




    const {cart, clearCart, totalQuantity , total} = useContext(CartContext)

    if(totalQuantity  === 0) {
        return (
            <div className="container-cart">
                <h3>Tu carrito esta vacio!</h3>
            </div>
        )
    }

    return (     
        
        <div className="container-cart">
             <h3 style={{display:'flex',justifyContent:'center',margin:"25px 25px" , fontFamily: 'Times New Roman ,Times, serif',fontSize: "35px"}}>Lista de productos en el carrito de compras</h3>
            { cart.map(prod => <CartItem key={prod.id} {...prod}/>) }
            
        <div style={{display:'flex',justifyContent:'space-around',marginTop:"25px",marginBottom:'35px'}}>

            <Link to='/checkout' className='shadow d-grid col-4 mx-auto btn btn-success'>Checkout</Link>
            <h3>Total: ${total}</h3>
            <button className="shadow d-grid col-2 mx-auto btn btn-warning"onClick={() => clearCart()} >Limpiar carrito</button>
        </div>
        </div>
        
    )
    }

export default Cart