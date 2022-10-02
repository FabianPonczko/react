import { useState ,useEffect } from "react"
import { getProducts } from "../asyncMock/asyncMock"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import {useParams } from "react-router-dom"

const ItemListContainer =({greeting})=>{
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const {categoryId} = useParams()
 
useEffect(()=>{
    setLoading(true)
    getProducts(categoryId).then(products =>{
        setProducts(products)    
    }
    ).catch(error=>{
        console.log(error)
    })
    .finally(() =>{
        setLoading(false)
    })
},[categoryId])

    if(loading)
        return <h1>Loading...</h1>
    


    return(
    
        <div>
            <h1 style={{display:'flex',justifyContent:'center'}}>{greeting}</h1>    
            <h3>{loading}</h3>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer