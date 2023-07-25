import { useState } from "react"

const ItemCount = ({inicial=1,stock,onAdd}) =>{    

    const [quantity,setQuantity] = useState(inicial)
    
    const increment = ()=>{
        if(quantity < stock){
            setQuantity(quantity +1)
        }
    }
    const decrement = ()=>{
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }
    console.log({stock})
    
    return (
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                {stock>0?
                    <div>
                    <h3>{quantity}/{stock}</h3>
                    <div  style={{display:'flex', marginBottom:'2px'}} className="gap-2" >
                        <button className="card-btn" onClick={increment} >+</button>
                        {/* <button className="col-2 mx-auto btn btn-primary" onClick={increment} >+</button> */}
                    <button className="card-btn " onClick={()=> onAdd(quantity)}>Agregar</button>
                        <button className="card-btn" onClick={decrement} >-</button>
                        {/* <button className="col-2 mx-auto btn btn-primary" onClick={decrement} >-</button> */}
                    </div>
                    {/* <button className="mb-1 col mx-auto btn btn-primary " onClick={()=> onAdd(quantity)}>Agregar</button> */}
                    </div>
                :<h3 style={{color:'red'}}>Sin stock</h3>}
            </div>
    )
}

export default ItemCount 