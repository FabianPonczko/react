
import { useContext } from "react";
import { CartContext } from "../../context/CarContex";

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
        <div>
            <h1>Generacion de orden de usuario</h1>
            <form onSubmit={handleSubmit} style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                <fieldset style={{display:'flex',flexDirection:'column'}}>
                    <label>
                        <p>Nombre</p>
                        <input name="name" required/>
                    </label>
                    <label>
                        <p>Telefono</p>
                        <input type="number" name="phone" required />
            
                    </label>
                    <label>
                        <p>Email</p>
                        <input type="email" name="email" required />
                    </label>
            
            </fieldset>
            <br></br>
            <button type="submit">Submit</button>
        </form>
        </div>
    )

}


 


export default UserForn