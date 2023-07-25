import { useState ,useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import {useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore"
import './ItemListContainer.css'
import SideBar from "../Sidebar/SideBar"
import Item from "../Item/Item"


const ItemListContainer =({greeting})=>{
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const {categoryId} = useParams()
 
useEffect(()=>{
    setLoading(true)
  
  getProducts(categoryId).then(products=>{
    setProducts(products)
  }).catch(error=>{
    console.log(error)
  }).finally(()=>{
    setLoading(false)
  })
  
},[categoryId])

    // if(loading)
    //     return  <div className="d-flex align-items-center">
    //               <strong>Loading...</strong>
    //               <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
    //             </div>
        
  

   
    if(loading)
      return(
        <div className="item-list-container">
            {greeting?<h2 className="greeting">{greeting}</h2>:null }
            {categoryId?<h3 className="greeting">{categoryId}</h3>:null}
          <div className="main">
            <SideBar categoryId={categoryId}/>
            <ItemList />
            
            </div>
        </div>
      )


    
    return(
      
      <div className="item-list-container">
      {greeting?<h2 className="greeting">{greeting}</h2>:null }
        {/* <h2 style={{margin:'25px', padding:'5px',color:'white',background: 'rgb(117, 57, 121, 0.988)',borderRadius: '5px', display:'flex',justifyContent:'center',marginTop:'20px',fontFamily: 'Times New Roman ,Times, serif',fontSize: "25px"}}>{greeting}</h2>     */}
        {/* <h3>{loading}</h3> */}
        <div>
            {categoryId?<h3 className="greeting">{categoryId}</h3>:null}
        </div>
        <div className="main">
          <SideBar categoryId={categoryId}/>
          <ItemList products={products} />
        </div>

    </div>
    )
}

export default ItemListContainer