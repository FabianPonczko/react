import { Card } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../context/CarContex";


const CartItem = ({id,title,img,price,quantity})=>{
    const {getProductToDelete} = useContext(CartContext)
    

    return (
        <div>              
            <Card key={id} className="row mb-2 text-center shadow" style={{display:'grid', width: '80vw',height:'150px'}}>
                <div style={{display:'flex',justifyItems:'center',alignItems:'center'}} >
                    <p className="id visually-hidden">{id}</p>
                <div className="col-12 col-lg-2">
                    <img src={img} alt="" style={{width: '100px' }}></img>
                </div>
                <div className="col-12 col-lg">
                    <p>{title}</p>
                </div>
                <div className="col-12 col-lg precio">
                    <p>$ <span>{price} x unidad</span></p>
                </div>
                <div className="col-12 col-lg precio">
                <label>
                    Cantidad:    
                    <p> <span>{quantity}</span></p>
                    </label>
                </div>
                <div className="col-6 col-lg">
                <label>
                    Sub-total:
                    <p>${quantity * price}</p>
                    </label>
                </div>
                <div className="col-6 col-lg">
                    <a href="#">
                    <button  onClick={()=>getProductToDelete(id)}>
                        <span className="badge rounded-pill text-bg-danger fs-5">X</span>
                    </button>
                    </a>
                </div>  
            </div>
        </Card>
    </div>             
        )
}

export default CartItem
