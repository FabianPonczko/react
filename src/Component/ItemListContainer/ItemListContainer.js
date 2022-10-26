import { useState ,useEffect } from "react"
// import { getProducts } from "../asyncMock/asyncMock"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import {useParams } from "react-router-dom"
import {collection, getDocs,query,where} from 'firebase/firestore'
import { db } from "../../services/firebase"

let collectionRef = []
const ItemListContainer =({greeting})=>{
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const {categoryId} = useParams()
 
useEffect(()=>{
    setLoading(true)
    if(categoryId){
        collectionRef=query( collection(db,'products'),where('category', '==',categoryId))
    }
    else{
        collectionRef=collection(db,'products')
    }
    
    // query( collection(db,'products'),where('category', '==',categoryId))
    // collection(db,'products')

    getDocs(collectionRef).then(response=>{
        console.log(response)
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
        return <h1>Loading...</h1>
    


    return(
    
        <div>
            <h1 style={{display:'flex',justifyContent:'center'}}>{greeting}</h1>    
            <h3>{loading}</h3>
            <div style={{display:'flex',justifyContent:'center'}}>
                {categoryId?<h3>{categoryId}</h3>:null}
            </div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer