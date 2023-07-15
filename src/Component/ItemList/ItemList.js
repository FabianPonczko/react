import { useEffect, useState } from "react"
import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({products}) =>{
    
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
     
        // setLoading(false) 
    },[products])

    if(!products)
        return  <div className="d-flex align-items-center">
                  <strong>Loading...</strong>
                  <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>
    return (

        <div className="container">
            {products.map(product=> (
                <Item key= {product.id} prod= {product}/>
            ))}
        </div>
       
    )
}
export default ItemList
