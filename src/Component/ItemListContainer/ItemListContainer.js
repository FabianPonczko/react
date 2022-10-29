import { useState ,useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import {useParams } from "react-router-dom"
import {collection, getDocs,query,where} from 'firebase/firestore'
import { db } from "../../services/firebase"

const ItemListContainer =({greeting})=>{
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const {categoryId} = useParams()
 
useEffect(()=>{
    setLoading(true)
    const collectionRef= categoryId ? query( collection(db,'products'),where('category', '==',categoryId)) : collection(db,'products')
    
    getDocs(collectionRef).then(response=>{    
        const productsAdapted = response.docs.map(doc =>{
            const data = doc.data()
            return { id: doc.id, ...data}
        })
     setProducts(productsAdapted)
    }).finally(()=>{
        setLoading(false)
    })
},[categoryId])

    if(loading)
        return <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
      </div>
        
    return(
    
        <div>
            {greeting?<h2 style={{margin:'25px', padding:'5px',color:'white',background: 'rgb(54, 44, 130, 0.9)',borderRadius: '5px', display:'flex',justifyContent:'center',marginTop:'20px',fontFamily: 'Times New Roman ,Times, serif',fontSize: "20px"}}>{greeting}</h2>:null }
            {/* <h2 style={{margin:'25px', padding:'5px',color:'white',background: 'rgb(117, 57, 121, 0.988)',borderRadius: '5px', display:'flex',justifyContent:'center',marginTop:'20px',fontFamily: 'Times New Roman ,Times, serif',fontSize: "25px"}}>{greeting}</h2>     */}
            <h3>{loading}</h3>
            <div style={{display:'flex',justifyContent:'center'}}>
                {categoryId?<h3>{categoryId}</h3>:null}
            </div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer