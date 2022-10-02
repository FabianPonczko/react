import { Button } from "react-bootstrap"
import { Card } from "react-bootstrap"
import { useState,useEffect } from "react"


const ItemDetail = ({detailProduct})=>{
    const [product,setProduct] = useState(detailProduct)
    const [loading,setLoading] = useState(true)
     
  
useEffect(()=>{
    setLoading(false)
    setProduct(detailProduct)
},[detailProduct])

if(loading){
    return <h1>Loading...</h1>
}

return (
        
        <div style={{display:'flex',gap:'15px'}}>
          
                <Card key= {product.id} style={{ width: '15rem '}}>
                <Card.Img  variant="top" src={product.imagen} />
                <Card.Body>
                <Card.Title>{product.titulo}</Card.Title>
                <Card.Text>
                    {product.descripcion}
                </Card.Text>
                
                </Card.Body>
            </Card>
           
            
            
        </div> 
    )
}
export default ItemDetail