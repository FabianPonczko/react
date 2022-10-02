import ItemCountList from "../ItemCountList/ItemCountList"
import { useState, useEffect } from "react"
import { getProduct } from "../asyncMock/asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailConteiner = ()=>{
    const [product,setProduct] = useState({})
    const [loading,setLoading] = useState(true)
    const {productId} = useParams()

useEffect(()=>{
    getProduct(productId).then(product=>{
        setProduct(product)
        setLoading(false)
    })

    
},[])

if(loading){
    return(
        <h1>Loading...</h1>
    )
}

    return(
            <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                <h1>Detalle del producto</h1>
            <ItemDetail  detailProduct= {product} />
            <ItemCountList inicial= {1} stock={10}text="Se agrega al carrito"/>
            </div>
           
    )

}
export default ItemDetailConteiner