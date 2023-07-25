import React, { useEffect, useState } from 'react'
import { getProducts } from "../../services/firebase/firestore"
import './SideBar.css'
import { Link } from 'react-router-dom'

let cat=[]

function SideBar({categoryId="todos"}) {
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
            console.log(selectCategory);
          }).catch(error=>{
            console.log("error",error)
          }).finally(()=>{
          })
          setSelectCategory(categoryId)
    },[selectCategory,categoryId])

  return (
    <div className='categoryBar'>
        <span>Categorias</span>
        <ul>
            <Link to={"/"} onClick={()=>handleClick("todos")}>
                {selectCategory==="todos"?<li style={{color:"#1B2631",scale:"120%"}}>Todos</li>:<li>Todos</li>} 
            </Link>
           
            {cat.map(item=>{
                return (
                    <div className='category-li' key={item} >
                        <Link to={`/category/${item}`} onClick={()=>handleClick(item)} >
                                {selectCategory===item?<li style={{color:"#1B2631",scale:"120%"}}>{item}</li>:<li>{item}</li>}  
                        </Link> 
                    </div>
                )  
            })}    
        </ul>
    </div>
  )
}

export default SideBar