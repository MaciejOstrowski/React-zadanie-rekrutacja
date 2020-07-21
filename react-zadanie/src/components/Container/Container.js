import React from 'react'
import Products from '../Products/Products'
import Cart from '../Cart/Cart'
import styles    from './Container.module.scss'

const Container = () => {
    return (
        <div className={styles.container}>
            <Products />
            <Cart />
        </div>
    )
}

export default Container