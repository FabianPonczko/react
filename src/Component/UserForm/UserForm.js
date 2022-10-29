
import { useContext } from "react";
import { CartContext } from "../../context/CarContex";
import { Card } from "react-bootstrap";

const UserForn = ()=>{

    const {setBuyer} = useContext(CartContext)

    const handleSubmit = event => {
        event.preventDefault();
       
        const userBuyer ={
                name: event.target.name.value,
                phone: event.target.phone.value,
                email: event.target.email.value, 
        }
        
        setBuyer(userBuyer)
    }
    
    return(
        <div style={{ fontFamily: 'Times New Roman ,Times, serif',fontSize: "20px"}}>
            <br></br>
            <h2>Datos del Cliente para generación de orden</h2>
            <Card>

            <form onSubmit={handleSubmit} style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                <fieldset style={{display:'flex',flexDirection:'column'}}>
                    <label>
                        <p>Nombre</p>
                        <input name="name" placeholder="Nombre de Usuario" required/>
                    </label>
                    <label>
                        <p>Telefono</p>
                        <input type="text" name="phone" placeholder="351-8022319" pattern="[0-9]{3}-[0-9]{7}" required />
            
                    </label>
                    <label>
                        <p>Email</p>
                        <input type="email" name="email" placeholder="Usuario@email.com" required />
                    </label>
            
            </fieldset>
            <br></br>
            <button className=" d-grid col-8 btn btn-primary mb-4 fs-4" type="submit">Cargar Cliente</button>
        </form>
            </Card>
        </div>
    )

}


 


export default UserForn