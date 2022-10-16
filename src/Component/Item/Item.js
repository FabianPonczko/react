
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({prod})=>{

    return(
        <div className='text-center' > 
             <Container >
                <Row >
                    <Col  >
                        <Card  style={{ width: '15rem ',height:'25rem'}}>
                            <Card.Img variant="top" src={prod.imagen} />
                            <Card.Body  >
                                <Card.Title>{prod.titulo}</Card.Title>
                                <Card.Text>{`$${prod.precio}`}</Card.Text>
                                <Link to={`/detail/${prod.id}`}>
                                    <button class=" d-grid col-8 mx-auto btn btn-primary">Detalle</button>
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