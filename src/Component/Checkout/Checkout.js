import { useState, useContext } from "react"
import { CartContext } from "../../context/CarContex";
import { context } from "../../App";
import { getDocs, addDoc, collection, doc, updateDoc, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import UserForn from "../UserForm/UserForm";


const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const { cart, total, clearCart ,buyer} = useContext(CartContext)
    // const { cart, total, clearCart } = useContext(context)

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
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Su orden se esta generando...</h1>
    }

    return (
        <div>
            <UserForn/>
            <h1>Checkout</h1>
            <button onClick={createOrder}>Agregar documento</button>
            
        </div>
        
    )
}

export default Checkout