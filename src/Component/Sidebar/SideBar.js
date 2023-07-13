import React, { useEffect, useState } from 'react'
import { getProducts } from "../../services/firebase/firestore"
import './SideBar.css'

let cat=[]

function SideBar() {
    const [category,SetCategory]=useState([])

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


    useEffect(()=>{
        getProducts().then(products=>{
            getCategory(products)
            SetCategory(cat)

          }).catch(error=>{
            console.log("error",error)
          }).finally(()=>{
          })
    },[])

  return (
    <div className='categoryBar'>
        <div>Categorias</div>
        <ul>
        {cat.map(item=>{
            return (
                <li key={item}>{item}</li>
            )
        })}
            
        </ul>
    </div>
  )
}

export default SideBar