
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({prod})=>{

    return(
        <div > 
             <Container >
                <Row>
                    <Col  >
                        <Card style={{ width: '15rem ',height:'25rem'}}>
                            <Card.Img  variant="top" src={prod.imagen} />
                            <Card.Body>
                                <Card.Title>{prod.titulo}</Card.Title>
                                {/* <Card.Text>{prod.descripcion}</Card.Text> */}
                                <Link to={`/detail/${prod.id}`}>
                                    <Button variant="primary ,top">Detalle</Button>
                                </Link>
                    
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Item