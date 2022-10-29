
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({prod})=>{
    return(
        <div className='text-center' > 
             <Container >
                <Row >
                    <Col  >
                        <Card  style={{ width: '15rem ',height:'25rem'}} >
                            <Card.Img className='img-thumbnail' variant="top" src={prod.img} style={{height:'180px'}}/>
                            <Card.Body style={{display: 'flex',flexDirection: 'column',justifyContent: 'space-evenly'}} >
                                <Card.Title>{prod.title}</Card.Title>
                                <Card.Text>{`$${prod.price}`}</Card.Text>
                                <Link to={`/detail/${prod.id}`} >
                                    <button className="d-grid col-8 mx-auto btn btn-primary">Detalle</button>
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