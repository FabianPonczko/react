
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/CarContex";
import { useContext } from "react";

const Navbar = () =>{
const {cart,buyer} = useContext(CartContext)

    return (
        <nav className="navbar">
            <div>
                <Link style= {{color:'tomato'}}to='/'>
                    <h1><span>FoxX</span>Computación</h1>
                </Link>
            </div>
            <div className="btn">
                <Link to={"/category/Monitores"} className="button">
                    {/* <Button > */}
                        Monitores
                    {/* </Button> */}
                </Link>
                <Link to={"/category/Teclados"}className="button">
                    {/* <Button> */}
                        Teclados
                    {/* </Button> */}
                </Link>
                <Link to={"/category/Notebooks"}className="button">
                    {/* <Button> */}
                        Notebooks
                    {/* </Button> */}
                </Link>
                <Link to={"/category/Placas"}className="button">
                    {/* <Button> */}
                        Placas
                    {/* </Button> */}
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