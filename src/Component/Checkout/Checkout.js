import { useState, useContext,useEffect } from "react"
import { CartContext } from "../../context/CarContex";
import { context } from "../../App";
import { getDocs, addDoc, collection, doc, updateDoc, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import UserForn from "../UserForm/UserForm";
import { Card } from "react-bootstrap";


const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const { cart, total, clearCart ,buyer,productOutStock} = useContext(CartContext)
    // const { cart, total, clearCart } = useContext(context)
    
// useEffect(()=>{
// console.log(buyer)
// },[buyer])

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer,
                items: cart,
                total
            }
    
            console.log(objOrder)
    
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
            const { docs } = productsAddedFromFirestore
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
    
                console.log(`El id de su orden es: ${orderAdded.id}`)
                const OrderId = orderAdded.id
                clearCart("clearWithOutMessage",OrderId)
                
            } else {
                console.log('Hay productos fuera de stock')
                productOutStock()
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <div style={{ fontFamily: 'Times New Roman ,Times, serif',fontSize: "25px"}}>
        <strong>Su orden se esta generando...</strong>
        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
      </div>
        
    }


const buyerData =()=> {
    return (
        <div style={{ fontFamily: 'Times New Roman ,Times, serif',fontSize: "25px"}}>
        
        <h1 className="m-5">Checkout de generación de orden</h1>
        <Card className="card text-center">
        <div className="card-header fs-1">
        Datos de usuario
        
        </div>
        <div className="card-body">
    
    <div className="card-text">
        <p>Nombre: <span className="fst-italic">{buyer.name}</span></p>
        <p>Telefono: <span className="fst-italic"> {buyer.phone}</span></p>
        <p>Email: <span className="fst-italic">{buyer.email}</span></p>
    </div>
        {cart.length? <button className=" d-grid col-12 btn btn-success mb-1 fs-4" onClick={createOrder}>Generar pedido</button>:<button className=" d-grid col-12 btn btn-danger mb-1 fs-4">Carrito Vacio</button>}
  </div>
        
            
        </Card>
        </div>
    )
}
    return (
        <div>
            {!buyer.name ?<UserForn/> : buyerData() }
        </div>
        
    )
}

export default Checkout