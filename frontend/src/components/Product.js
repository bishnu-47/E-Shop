import React from 'react';
import { Card  } from 'react-bootstrap'
import Rating from './Rating'

export default function Product({ product }){
    return(
        <>
            <Card className="my-3 p-3 rounded">
                <a href={`/product/${product.id}`}>
                <Card.Img src={product.image} varient='top' />
                </a>

            <Card.Body>
                <a href={`/product/${product.id}`}>
                    <Card.Title as='div'>
                        <strong>{ product.name }</strong>
                    </Card.Title>
                </a>

            <Card.Text as='div'>
                <div className='my-3'>
                    <Rating rating={product.rating} reviews={product.numReviews}/>
                </div>
            </Card.Text>

            <Card.Text as='h3'>₹{ product.price  }</Card.Text>
            </Card.Body>
            </Card>
        </>
    )
}
