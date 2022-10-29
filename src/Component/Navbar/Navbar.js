
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import {context} from '../../App'
import { CartContext } from "../../context/CarContex";
import { useContext } from "react";

const Navbar = () =>{
const {cart,buyer} = useContext(CartContext)

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
            <CartWidget count={cart}/>
            <Link to={"/checkout"}>
            {!buyer.name?null:<img style={{background:"white",borderRadius:"5px", display:'block',position:'absolute',bottom:'10px',right:"15px"}}src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/000000/external-user-user-tanah-basah-basic-outline-tanah-basah-3.png"  height="20" width="20"/>}
            </Link>
            
        </nav>
    );
}
export default Navbar