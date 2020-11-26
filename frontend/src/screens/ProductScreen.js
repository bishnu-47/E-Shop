import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link  } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button  } from 'react-bootstrap'

import Rating from '../components/Rating'

function ProductScreen({ match }){
    const [ product, setProduct ] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`)

            setProduct(data)
        }
        fetchProduct()
    })

    return(
        <>
            <Link className='btn btn-light my-3' to='/'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={ product.image  } alt={ product.name  } fluid />
                </Col>
                <Col md={3}>
                    <ListGroup varient='flush'>
                        <ListGroup.Item>
                            <h3>{ product.name  }</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating rating={ product.rating  } reviews={ product.numReviews } />
                        </ListGroup.Item>

                        <ListGroup.Item><em>Price</em> : ₹{ product.price }</ListGroup.Item>
                        <ListGroup.Item><em>Description</em> : { product.description }</ListGroup.Item>

                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item>
                        <Row>
                            <Col>Price :</Col>
                            <Col> ₹ { product.price } </Col>
                        </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Row>
                            <Col>Status :</Col>
                            <Col>{ product.countInStock > 0 ? 'In Stock' : 'Out of Stock' }</Col>
                        </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled={ product.countInStock === 0 }>Add to Cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
