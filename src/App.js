
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Component/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import {createContext,useState} from 'react'

export const context = createContext()

function App() {

  const [cart,setCart] = useState([])
  
  
  const addItem = (productToAdd)=>{
    setCart([...cart,productToAdd])
  }

  const getTotalQuantity = ()=>{
    let totalcount=0
    cart.forEach(prod=>{
      totalcount += prod.quantity
    })
    return totalcount
  }
  
  return (
      
    <div className='app'>
      <context.Provider value = {{addItem,getTotalQuantity,cart}}>
        <BrowserRouter>  
            <Navbar /> 
            <div className="ItemList">
              <Routes>
                  <Route path='/' element={<ItemListContainer greeting="Bienvenidos"/> } />
                  <Route path='/category/:categoryId' element={<ItemListContainer />} />
                  <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
                  <Route path='*' element={<p>404 element not found </p>} />
              </Routes>
            </div>
        </BrowserRouter>
      </context.Provider>
    </div>
  )
}

export default App;
