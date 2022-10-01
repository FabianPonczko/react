
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () =>{
    return (
        <nav className="navbar">
            <div>
                <h1>FoxX-Computación</h1>
            </div>
            <div className="btn">
                <button>Monitores</button>
                <button>Teclados</button>
                <button>Notebooks</button>
            </div>
            <CartWidget/>
        </nav>
    );
}
export default Navbar