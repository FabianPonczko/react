import { useState, useEffect } from "react"
import { getProduct } from "../asyncMock/asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ()=>{
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
            </div>
           
    )

}
export default ItemDetailContainer