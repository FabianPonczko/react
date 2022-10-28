
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Component/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import {createContext,useState} from 'react'
import Cart from './Component/Cart/Cart';

export const context = createContext()

function App() {

  const [cart,setCart] = useState([])
  
  
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
  
  return (
      
    <div className='app'>
      <context.Provider value = {{addItem,getTotalQuantity,getProductQuantity,getProductToDelete,cart}}>
        <BrowserRouter>  
            <Navbar /> 
            <div className="ItemList">
              <Routes>
                  <Route path='/' element={<ItemListContainer greeting="Bienvenidos"/> } />
                  <Route path='/category/:categoryId' element={<ItemListContainer />} />
                  <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
                  <Route path='/cart' element={<Cart/>} />
                  <Route path='*' element={<p>404 element not found </p>} />
              </Routes>
            </div>
        </BrowserRouter>
      </context.Provider>
    </div>
  )
}

export default App;
