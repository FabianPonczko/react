
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer'
import ItemCountList from './Component/ItemCountList/itemCountList';

function App() {

  const textToButton=()=>{console.log("Agregar al carrito")}
  return (
      
    <div className='app'>
      <Navbar /> 
      <div className="ItemList">
        <ItemListContainer greeting="Bienvenidos" />
      </div>
    </div>
  )
}

export default App;
