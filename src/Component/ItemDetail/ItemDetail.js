import { Card } from "react-bootstrap"
import { useState,useContext} from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CarContex"
import swal from 'sweetalert';
import { Link } from "react-router-dom";


const ItemDetail = ({detailProduct})=>{
    const [productToAdd,setProductToAdd] = useState(detailProduct)
    const {addItem,getProductQuantity} = useContext(CartContext)
    const {stock,id} = detailProduct

const handleOnAdd =(stock)=>{
    setProductToAdd(productToAdd)

    productToAdd.quantity = stock
    
    swal({
        title: " ",
        text: "Producto agregado con exito!",
        icon: "success",
        buttons: false,
        timer: 1500,
    }).then(()=>{
        addItem(productToAdd)
    })
      
}
const productAddedQuantity = getProductQuantity(id)

return (
        <div className='text-center' style={{display:'flex',gap:'15px'}}>
            <Card key= {productToAdd.id} style={{ width: '16rem '}}>
                <Card.Img variant="top" src={productToAdd.img} />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        {productToAdd.description}
                    </Card.Text>
                </Card.Body>
                {productToAdd.quantity===undefined 
                ?
                <ItemCount inicial= {productAddedQuantity} stock={stock} onAdd={handleOnAdd}/>
                :<Link to={"/cart"}>
                    <button className="mb-2 d-grid col-8 mx-auto btn btn-success">Finalizar compra</button>
                </Link>}
            </Card> 
        </div> 
    )
}
export default ItemDetail