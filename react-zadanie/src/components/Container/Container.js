import React from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import * as selectors from '../../redux/selectors'
import Products from '../Products/Products'
import styles    from './Container.module.scss'
import { Col, Row, Card } from 'antd'
import * as actionTypes from '../../redux/actions/actionTypes'
import Cart from '../Cart/Cart'


const Container = () => {
    const dispatch = useDispatch()
    const productsList = useSelector(selectors.productsListSelector)
    const cartList = useSelector(selectors.cartListSelector)

    const addToCart = (product) => {
        dispatch({ type: actionTypes.ADD_TO_CART, product: product })
    }

    return (
        <div className={styles.container}>
            <div className="site-card-wrapper">
                <Row gutter={10}>
                    <Col span={12}>
                        <Card
                            className={styles.productsCart}
                            title="Products"
                            bordered={false}>
                            <Row gutter={[{ xs: 4, sm: 4, md: 4, lg: 4 }, { xs: 4, sm: 4, md: 4, lg: 4 }]}>
                                {productsList && productsList.map(product => {
                                    return (
                                        <Col key={product.id} span={8}>
                                            <Products
                                                product={product}
                                                addToCart={addToCart} / >
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            className={styles.cart}
                            title="Cart"
                            bordered={false}>
                            <Row gutter={[{}, { xs: 4, sm: 4, md: 4, lg: 4 }]}>
                                {cartList && cartList.map(product => {
                                    return (
                                        <Col key={product.id} span={8}>
                                            <Cart
                                                product={product}
                                                addToCart={addToCart} / >
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Container