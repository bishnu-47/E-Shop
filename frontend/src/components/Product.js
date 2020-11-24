import React from 'react';
import { Card  } from 'react-bootstrap'

export default function Product({ product }){
    return(
        <>
            <Card className="my-3 p-3 rounded">
                <a href={`/product/${product.id}`}>
                <Card.Img src={product.image} varient='top' />
                </a>
            </Card>

            <Card.Body>
                <a href={`/product/${product.id}`}>
                    <Card.Title as='div'>
                        <strong>{ product.name }</strong>
                    </Card.Title>
                </a>
            </Card.Body>

            <Card.Text as='div'>
                <div className='my-3'>
                    { product.rating  } form { product.numReviews  } reviews
                </div>
            </Card.Text>

            <Card.Text as='h3'>₹{ product.price  }</Card.Text>
        </>
    )
}
