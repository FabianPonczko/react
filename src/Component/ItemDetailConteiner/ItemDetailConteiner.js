import { useState, useEffect } from "react"
import { getProduct } from "../asyncMock/asyncMock"

const ItemDetailConteiner = ()=>{
const [product,setProduct] = useState({})
useEffect(()=>{
    getProduct('1').then(response=>{
        
    })
},[])


    return(
        <h1>Detalle de productos</h1>
        //  <div style={{display:'flex',gap:'15px'}}>
      //    {products.map(product=>
      //       <Card style={{ width: '15rem '}}>
      //       <Card.Img  variant="top" src={product.imagen} />
      //       <Card.Body>
      //         <Card.Title>{product.titulo}</Card.Title>
      //         <Card.Text>
      //           {product.descripcion}
      //         </Card.Text>
      //         <Button variant="primary">Detalle</Button>
      //       </Card.Body>
      //     </Card>
      //   )
      //   }
      //  </div>
    )

}