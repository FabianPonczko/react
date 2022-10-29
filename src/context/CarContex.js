import {createContext} from 'react'
import { useState,useEffect } from 'react'
import swal from 'sweetalert';
export const CartContext = createContext()


export const CartContextProvider = ({children})=>{

    const [cart, setCart] = useState([])
    const [buyer, setBuyer] = useState({})
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)
    

    useEffect(() => {
        const totalQuantity = getTotalQuantity()
        setTotalQuantity(totalQuantity)
      }, [cart])

      useEffect(() => {
        const total = getTotal()
        setTotal(total)
      }, [cart])

    const addItem = (productToAdd)=>{
    if(!isInCart(productToAdd.id)){
        setCart([...cart,productToAdd])
    }else{
        console.log('Producto ya agregado')
        const cartUpdated = cart.map(prod=>{
        if(prod.id=== productToAdd.id){
            const productUpdated = {...prod, quantity:productToAdd.quantity}
            return productUpdated
        }else{
            return prod
        }
        })
        setCart(cartUpdated)
    }
    }

    const isInCart = (id)=>{
    return cart.some(prod =>prod.id===id)
    }

    const getTotal = () => {
        let accu = 0
  
        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })
  
        return accu
      }

    const getTotalQuantity = ()=>{
    let totalcount=0
    cart.forEach(prod=>{
        totalcount += prod.quantity
    })
    return totalcount
    }

    const getProductQuantity = (id)=>{
    const product = cart.find(prod=>prod.id===id)

    return product?.quantity
    }

    const getProductToDelete=(id)=>{
        swal({
            title: "Eliminar producto?",
            text: "Desea eliminar un producto de la lista",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const cartFilter = cart.filter(prod=>prod.id!==id)
                swal("Producto eliminado!", {
                    icon: "success",
                    buttons: false,
                    timer: 1500,
                });
                setCart(cartFilter)
            } else {
              swal({
                text: "Cancelado!",
                icon: "success",
                buttons: false,
                timer: 1500,
            });
            }
          });
    
    }

    const clearCart = (Message) => {
        Message=="clearWithOutMessage"? setCart([])
        :
        swal({
            title: "Esta seguro?",
            text: "Eliminara todos los productos del carrito!",
            icon: "warning",
            showCancelButton: true,
            buttons: true,
            dangerMode: true,
          }).then((isConfirm)=> {
            if (isConfirm) {
                swal({
                    text: "Productos Eliminados!",
                    icon: "success",
                    buttons: false,
                    timer: 1500,
                });
                setCart([])
            } else {
                swal({
                    text: "Eliminacion Cancelada!",
                    icon: "success",
                    buttons: false,
                    timer: 1500,
                });
            }
          })
        
      }

      return (
        <CartContext.Provider value={{ cart, addItem, getProductToDelete, getProductQuantity, getTotalQuantity, clearCart, totalQuantity, total ,buyer ,setBuyer}}>
            {children}
        </CartContext.Provider>
    )
}
