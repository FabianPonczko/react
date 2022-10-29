import { Card } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
// import { context } from "../../App";
import { CartContext } from "../../context/CarContex";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";


const Cart = ()=>{
    const {cart, clearCart, totalQuantity , total} = useContext(CartContext)
   
console.log(`llego cart:${cart}`)
   
    // useEffect(()=>{
    //     console.log({cart})
    // },[cart])

    if(totalQuantity  === 0) {
        return (
            <>
            <br></br>
            <h3>Tu carrito esta vacio!</h3>
            </>
        )
    }

    return (     
        <div >
             <h3 style={{display:'flex',justifyContent:'center',margin:"25px 25px"}}>Lista de productos en el carrito de compras</h3>
            { cart.map(prod => <CartItem key={prod.id} {...prod}/>) }
            
        <div style={{display:'flex',justifyContent:'space-around',marginTop:"25px"}}>

            <Link to='/checkout' className='d-grid col-4 mx-auto btn btn-success'>Checkout</Link>
            <h3>Total: ${total}</h3>
            <button className=" d-grid col-2 mx-auto btn btn-warning"onClick={() => clearCart()} >Limpiar carrito</button>
        </div>
        </div>
    )
    }

export default Cart