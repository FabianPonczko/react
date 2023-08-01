import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { Link, useParams } from "react-router-dom"
import { getProductId } from "../../services/firebase/firestore"
import './ItemDetailContainer.css'

const ItemDetailContainer = ()=>{
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const {productId} = useParams()
    

    useEffect(()=>{
        getProductId(productId).then(products=>{
            setProducts(products)
          }).catch(error=>{
            console.log(error)
          }).finally(()=>{
            setLoading(false)
          })
    },[productId])

  

if(loading){
    return(
        <div className="d-flex align-items-center">
          <strong>Loading...</strong>
        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
      </div>
    )
}

    return(
      <div className="item-detail">
            <div className="conteiner">
                <Link to={`/category/${products.category}`}>
                  <h5 className="volver">{`<- volver - producto ${products.category}`}</h5>
                </Link>
                
                <h2 className="title">{products.title}</h2>
                <ItemDetail  detailProduct= {products} />
            </div>
      </div>
           
    )

}

export default ItemDetailContainer