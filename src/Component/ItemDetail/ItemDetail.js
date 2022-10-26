import { Card } from "react-bootstrap"
import { useState,useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { context } from '../../App'


const ItemDetail = ({detailProduct})=>{
    const [productToAdd,setProductToAdd] = useState(detailProduct)
    const {addItem} = useContext(context)
    const {stock} = detailProduct

const handleOnAdd =(stock)=>{
    setProductToAdd(productToAdd)

    productToAdd.quantity = stock
    addItem(productToAdd)
}


console.log(productToAdd.quantity)
return (
        
        <div className='text-center' style={{display:'flex',gap:'15px'}}>
          
                <Card key= {productToAdd.id} style={{ width: '15rem '}}>
                <Card.Img variant="top" src={productToAdd.img} />
                <Card.Body>
                <Card.Title>{productToAdd.title}</Card.Title>
                <Card.Text>
                    {productToAdd.description}
                </Card.Text>
                
                </Card.Body>
                {productToAdd.quantity===undefined?(<ItemCount inicial= {1} stock={stock} onAdd={handleOnAdd}/>):(<button class=" d-grid col-8 mx-auto btn btn-success">Finalizar compra</button>)}
                
            </Card>
           
            
            
        </div> 
    )
}
export default ItemDetail