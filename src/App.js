
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer'


function App() {
  return (
      
    <div className='app'>
      <Navbar /> 
      <ItemListContainer greeting="Productos Seleccionados!" />
    </div>
  )
}

export default App;
