import { useState } from "react"

const ItemCount = ({inicial,stock,onAdd}) =>{    

    const [quantity,setQuantity] = useState(inicial)
    
    const increment = ()=>{
        if(quantity < stock){
            setQuantity(quantity +1)
        }
    }
    const decrement = ()=>{
        if(quantity > inicial){
            setQuantity(quantity - 1)
        }
    }
    
    
    return (
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <h2>{quantity}</h2>
               <div >
                    <button  onClick={increment}>+</button>
                    <button  onClick={decrement}>-</button>
                    <button  onClick={()=> onAdd(quantity)}>Agregar al carrito</button>
               </div>
            </div>
    )
}

export default ItemCount 