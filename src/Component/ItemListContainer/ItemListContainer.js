import { useState ,useEffect } from "react"
import ItemCountList from "../ItemCountList/itemCountList"
import { getProducts } from "../asyncMock/asyncMock"
import ItemList from "../ItemList/ItemList"

const textToButton=()=>{console.log("Agregar al carrito")}

const ItemListContainer =({greeting})=>{
    const [product,setProduct] = useState([])
    const [loading,setLoading] = useState(true)
 
useEffect(()=>{
    getProducts()
    .then(res =>{
        setProduct(res)    
    }
    ).catch(error=>{
        console.log(error)
    })
    .finally(() =>{
        setLoading(false)
    })
},[])

    if(loading)
        return <h1>Loading...</h1>
    


    return(
        <div className="list">
            <h1>{greeting}</h1>
            {/* {<ItemCountList inicial= {0} stock={10} text={textToButton}/> } */}
            <h2>{loading}</h2>
            <ItemList products={product} />

        </div>
    )
}

export default ItemListContainer