import { useState ,useEffect } from "react"
// import { getProducts } from "../asyncMock/asyncMock"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
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
    
    
    // query( collection(db,'products'),where('category', '==',categoryId))
    // collection(db,'products')

    getDocs(collectionRef).then(response=>{
        
        const productsAdapted = response.docs.map(doc =>{
            const data = doc.data()
            return { id: doc.id, ...data}
        })
     setProducts(productsAdapted)
    }).finally(()=>{
        setLoading(false)
    })
    // getProducts(categoryId).then(products =>{
    //     setProducts(products)    
    // }
    // ).catch(error=>{
    //     console.log(error)
    // })
    // .finally(() =>{
    //     setLoading(false)
    // })
},[categoryId])

    if(loading)
        return <div class="d-flex align-items-center">
        <strong>Loading...</strong>
        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
      </div>
        


    return(
    
        <div>
            <h2 style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>{greeting}</h2>    
            <h3>{loading}</h3>
            <div style={{display:'flex',justifyContent:'center'}}>
                {categoryId?<h3>{categoryId}</h3>:null}
            </div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer