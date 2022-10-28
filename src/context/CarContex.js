import {createContext} from 'react'

export const CartContext = createContext()


export const CartContextProvider = ({chilren})=>{

    const [cart, setCart] = useState([])
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
    const cartFilter = cart.filter(prod=>prod.id!==id)
    setCart(cartFilter)
    }

    const clearCart = () => {
        setCart([])
      }

      return (
        <CartContext.Provider value={{ cart, addItem, removeItem, getProductQuantity, getTotalQuantity, clearCart, totalQuantity, total }}>
            {chilren}
        </CartContext.Provider>
    )
}
