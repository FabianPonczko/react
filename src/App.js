
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Component/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Cart from './Component/Cart/Cart';
import Checkout from './Component/Checkout/Checkout';
import { CartContextProvider } from './context/CarContex'
import SideBar from './Component/Sidebar/SideBar';


function App() {

  return (
      
    <div className='app'>
      <CartContextProvider>
        <BrowserRouter>  
            <Navbar /> 
            <div className="ItemList">
              <Routes>
                  <Route path='/' element={<ItemListContainer greeting="- Productos Seleccionados -"/> } />
                  <Route path='/category/:categoryId' element={<ItemListContainer />} />
                  <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
                  <Route path='/cart' element={<Cart/>} />
                  <Route path='/checkout' element={<Checkout/>} />
                  <Route path='*' element={<p>404 element not found </p>} />
              </Routes>
            </div>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App;
