import { useState, useEffect } from "react"
// import { getProduct } from "../asyncMock/asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import {getDoc,doc} from 'firebase/firestore'
import { db } from "../../services/firebase"


const ItemDetailContainer = ()=>{
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const {productId} = useParams()

    useEffect(()=>{
        const docRef= doc(db,'products',productId)

            getDoc(docRef).then(doc=>{
                console.log({doc})
                const data = doc.data()
                console.log({data})
                const productsAdapted = { id: doc.id, ...data}    
                console.log(productsAdapted)
                setProducts(productsAdapted)

            }).catch((error)=>{
                console.log(error) //esto hay que mejorarlo
            }).finally(()=>setLoading(false))
        

    },[productId])

if(loading){
    return(
        <h1>Loading...</h1>
    )
}

    return(
            <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                <h1>Detalle del producto</h1>
            <ItemDetail  detailProduct= {products} />
            </div>
           
    )

}

export default ItemDetailContainer