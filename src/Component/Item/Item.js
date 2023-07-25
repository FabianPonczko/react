
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({prod})=>{
    return(
        <div className='text-center' id='card-container' > 
             <Container >
            {!prod?
             <Link >
             <Row >
                 <Col  >
                     <Card  style={{ width: '15rem ',height:'24rem', border:"none"}} >
                     {!prod?.title?
                         <Card.Img className='img-thumbnail1' variant="top" src={"../images/loading.gif"} style={{height:'200px'}}/>:
                         <Card.Img className='img-thumbnail1' variant="top" src={prod.img} style={{height:'180px'}}/>
                     }
                         <Card.Body className='card'id="card" >
                             <Card.Title>
                                 {!prod?.title?
                                     // <Card.Img className='img-thumbnail' variant="top" src={"../images/loading.gif"} style={{height:'180px'}}/>
                                     null
                                     :prod.title}
                                 </Card.Title>
                             <Card.Text>{`$${!prod?.price}`?null:prod.price}</Card.Text>
                             <Link to={`/detail/${prod?.id}`} >
                             {!prod?.title?
                                 null:
                                 <button className="card-btn">Detalle</button>
                             }
                             </Link> 
                         </Card.Body>
                     </Card>
                 </Col>
             </Row>
             </Link> 
            
            :
                



             <Link to={`/detail/${prod?.id}`} >
                <Row >
                    <Col  >
                        <Card  style={{ width: '15rem ',height:'24rem', border:"none"}} >
                        {!prod?.title?
                            <Card.Img className='img-thumbnail1' variant="top" src={"../images/loading.gif"} style={{height:'200px'}}/>:
                            <Card.Img className='img-thumbnail1' variant="top" src={prod.img} style={{height:'180px'}}/>
                        }
                            <Card.Body className='card'id="card" >
                                <Card.Title>
                                    {!prod?.title?
                                        // <Card.Img className='img-thumbnail' variant="top" src={"../images/loading.gif"} style={{height:'180px'}}/>
                                        null
                                        :prod.title}
                                    </Card.Title>
                                <Card.Text>{`$${!prod?.price}`?null:prod.price}</Card.Text>
                                <Link to={`/detail/${prod?.id}`} >
                                {!prod?.title?
                                    null:
                                    <button className="card-btn">Detalle</button>
                                }
                                </Link> 
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Link> 
            }
            </Container>   
        </div>
    )
}

export default Item