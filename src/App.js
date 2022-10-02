
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer'
import ItemDetailConteiner from './Component/ItemDetailConteiner/ItemDetailConteiner';
import {BrowserRouter, Routes,Route} from 'react-router-dom'



function App() {

  const textToButton=()=>{console.log("Agregar al carrito")}
  return (
      
    <div className='app'>
      <BrowserRouter>  
          <Navbar /> 
          <div className="ItemList">
            <Routes>
                <Route path='/' element={<ItemListContainer greeting="Bienvenidos"/> } />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/detail/:productId' element={<ItemDetailConteiner/>} />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
