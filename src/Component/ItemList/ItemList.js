import {Card} from "react-bootstrap"
import Button from "react-bootstrap/Button"
const ItemList = ({products}) =>{
    
    return (

       products.map(product=> <li>{product.titulo}</li>)
    
    )
}
export default ItemList
