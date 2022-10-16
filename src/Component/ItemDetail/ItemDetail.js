import { Card } from "react-bootstrap"
import { useState,useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { context } from '../../App'

const ItemDetail = ({detailProduct})=>{
    const [productToAdd,setProductToAdd] = useState(detailProduct)
    const {addItem} = useContext(context)
    const {cantidad} = detailProduct

const handleOnAdd =(quantity)=>{
    setProductToAdd(productToAdd)

    productToAdd.quantity = quantity
    addItem(productToAdd)
}


console.log(productToAdd.quantity)
return (
        
        <div className='text-center' style={{display:'flex',gap:'15px'}}>
          
                <Card key= {productToAdd.id} style={{ width: '15rem '}}>
                <Card.Img variant="top" src={productToAdd.imagen} />
                <Card.Body>
                <Card.Title>{productToAdd.titulo}</Card.Title>
                <Card.Text>
                    {productToAdd.descripcion}
                </Card.Text>
                
                </Card.Body>
                {productToAdd.quantity===undefined?(<ItemCount inicial= {1} stock={cantidad} onAdd={handleOnAdd}/>):(<button class=" d-grid col-8 mx-auto btn btn-success">Finalizar compra</button>)}
                
            </Card>
           
            
            
        </div> 
    )
}
export default ItemDetail