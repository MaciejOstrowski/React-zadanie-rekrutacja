import React from 'react'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import styles from './Products.module.scss'

const Products = ({
        product,
        addToCart,
    }) => {
    return (
        <>
            <Card
                hoverable
                cover={<img alt="example" src={`${product.cover}`} />}
                className={styles.productCard}>
                <Meta
                    title={`${product.title}`}
                    description={`Price: ${product.price} PLN`} />
                <div
                    className={styles.addToCartButton}
                    onClick={() => addToCart(product)}
                    type="primary">
                    Add to Cart
                </div>
            </Card>
        </>
    )
}

export default Products