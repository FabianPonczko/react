import { useState, useEffect } from "react"
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
                const data = doc.data()
                const productsAdapted = { id: doc.id, ...data}    
                setProducts(productsAdapted)
            }).catch((error)=>{
                console.log(error) 
            }).finally(()=>setLoading(false))
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
            <div style={{display:'flex',alignItems:'center',flexDirection:'column' }}>
                <h2 className="m-3" style={{ fontFamily: 'Times New Roman ,Times, serif',fontSize: "35px"}}>{products.title}</h2>
            <ItemDetail  detailProduct= {products} />
            </div>
           
    )

}

export default ItemDetailContainer