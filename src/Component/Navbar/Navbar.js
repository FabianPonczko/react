
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Navbar = () =>{
    return (
        <nav className="navbar">
            <div>
                <Link style= {{color:'white'}}to='/'>
                    <h1>FoxX-Computación</h1>
                </Link>
            </div>
            <div className="btn">
                <Link to={"/category/Monitores"}>
                    <Button>
                        Monitores
                    </Button>
                </Link>
                <Link to={"/category/Teclados"}>
                    <Button>
                        Teclados
                    </Button>
                </Link>
                <Link to={"/category/Notebooks"}>
                    <Button>
                        Notebooks
                    </Button>
                </Link>
                <Link to={"/category/Placas"}>
                    <Button>Placas</Button>
                </Link>
            </div>
            <CartWidget/>
        </nav>
    );
}
export default Navbar