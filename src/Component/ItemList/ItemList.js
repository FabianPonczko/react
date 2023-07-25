import { useEffect, useState } from "react"
import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({products}) =>{
    
    const [loading,setLoading] = useState(true)
    console.log(products)
    useEffect(()=>{
     
        // setLoading(false) 
    },[products])



    if(!products)
        return  <div className="ItemList">
                    <div className="container">
                    <Item key= {1}/>
                    <Item key= {2}/>
                    <Item key= {3}/>
                    <Item key= {4}/>
                    <Item key= {5}/>
                    <Item key= {6}/>
                    <Item key= {7}/>
                    <Item key= {8}/>
                    </div>
                </div>

// "../images/loading.gif"
    return (
        <div className="ItemList">
            <div className="container">
                {products.map(product=> (
                    <Item key= {product.id || product} prod= {product}/>
                    ))}
            </div>
        </div>
       
    )
}
export default ItemList
