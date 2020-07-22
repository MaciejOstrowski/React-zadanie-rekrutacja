import React from 'react'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import styles from './Cart.module.scss'

const Cart = ({
        product,
        addToCart,
    }) => {
    return (
        <>
            <Card
                hoverable
                cover={<img alt="example" src={product.cover} />}
                className={styles.productCard}>
                <Meta
                    title={product.title}
                    description={`Price: ${product.price} PLN`} />
                <div>Amount: {product.amount}</div>
                <div
                    className={styles.removeFromCartButton}
                    onClick={() => addToCart(product)}
                    type="primary">
                    Remove from cart
                </div>
            </Card>
        </>
    )
}

export default Cart