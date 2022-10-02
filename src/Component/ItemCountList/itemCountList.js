import { useState } from "react"

const ItemCountList = ({inicial,stock,text}) =>{    
  
    let [state,setState] = useState(inicial)

    const increment = ()=>{
        if(state < stock){
            setState(state +1)
        }
    }
    const decrement = ()=>{
        if(state > inicial){
            setState(state - 1)
        }
    }
    
    const onAdd =()=>{
        console.log({text})
    }
   

    return (
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <h2>{state}</h2>
               <div>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                    <button onClick={onAdd}>Agregar al carrito</button>
               </div>
            </div>
    )
}

export default ItemCountList 