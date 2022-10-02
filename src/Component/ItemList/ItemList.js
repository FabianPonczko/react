import Item from "../Item/Item"


const ItemList = ({products}) =>{
    
    return (

        <div style ={{display:'flex',width:'90vw',gap:'5px',justifyContent:'center'}}>
            {products.map(product=> (
                <Item key= {product.id} prod= {product}/>
            ))}
        </div>
       
    )
}
export default ItemList
