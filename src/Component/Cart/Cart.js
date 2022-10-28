import { Card } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { context } from "../../App";


const Cart = ()=>{
    const {cart} = useContext(context)
    const {getProductToDelete} = useContext(context)
   

   
    useEffect(()=>{
        console.log({cart})
    },[cart])

    
    return (
            <div>
            <h1  style={{display:'flex',justifyContent:'center'}}>Cart</h1>
            {cart.map(product=> (
                                <Card key={product.id} className="row mb-2 text-center shadow" style={{display:'grid', width: '80vw',height:'150px'}}>

                                <div style={{display:'flex',justifyItems:'center',alignItems:'center'}} >
                                        <p className="id visually-hidden">{product.id}</p>
                                    <div className="col-12 col-lg-2">
                                        <img src={product.img} alt="" style={{width: '100px' }}></img>
                                    </div>
                                    <div className="col-12 col-lg">
                                        <p>{product.title}</p>
                                    </div>
                                    <div className="col-12 col-lg precio">
                                        <p>$ <span>{product.price} x unidad</span></p>
                                    </div>
                                    
                                    <div className="col-12 col-lg precio">
                                    <label>
                                        Cantidad:    
                                        <p> <span>{product.quantity}</span></p>
                                        </label>
                                    </div>
                                    
                                    <div className="col-6 col-lg">
                                    <label>
                                        Sub-total:
                                        <p>${product.quantity * product.price}</p>

                                        </label>

                                    </div>
                                    <div className="col-6 col-lg">
                                        <a href="#">
                                        <button  onClick={()=>getProductToDelete(product.id)}>
                                            <span className="badge rounded-pill text-bg-danger fs-5">X</span>
                                        </button>
                                        </a>
                                    </div>
                                        
                                </div>
            
                                </Card>
                                )

                   )}
                   </div>             
    )
            }

export default Cart