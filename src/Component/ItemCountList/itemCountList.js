import { useState } from "react"

const ItemCountList = ({inicial,stock,text}) =>{    
   console.log({text})
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
        console.log("text")
    }
   

    return (
            <div>
                <h1>{state}</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
    )
}

export default ItemCountList 