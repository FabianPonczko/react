import React, { useEffect, useState } from 'react'
import { getProducts } from "../../services/firebase/firestore"
import './SideBar.css'
import { Link } from 'react-router-dom'

let cat=[]

function SideBar() {
    const [category,SetCategory]=useState([])
    const [selectCategory,setSelectCategory]=useState("todos")
    



    const getCategory = (products)=>{
        let newpro = products.map((item)=>{
            return item.category
        })
        newpro.map((item)=>{
            if (!cat.includes(item)){
                cat.push(item)
            }
        })    
    }   

    const handleClick =(item)=>{
        setSelectCategory(item)
        console.log(selectCategory)
    }

    useEffect(()=>{
        getProducts().then(products=>{
            getCategory(products)
            SetCategory(cat)

          }).catch(error=>{
            console.log("error",error)
          }).finally(()=>{
          })
    },[selectCategory])



  return (
    <div className='categoryBar'>
        <span>Categorias</span>
        <ul>
            <Link to={"/"} onClick={()=>handleClick("todos")}>
                {selectCategory==="todos"?<span style={{color:"tomato"}}>Todos</span>:"Todos"} 
            </Link>
           
            {cat.map(item=>{
                return (
                    <div className='category-li' key={item} >
                            
                        <Link to={`/category/${item}`} onClick={()=>handleClick(item)} >
                                {selectCategory===item?<span style={{color:"tomato"}}>{item}</span>:item}  
                                
                        </Link> 
                    </div>
                )  
            })}    
        </ul>
    </div>
  )
}

export default SideBar