import { createSelector } from 'reselect'

export const productsListSelector = createSelector(
    state => state.listOfProducts.products,
    products => products
)

export const cartListSelector = createSelector(
    state => state.listOfProducts.cart,
    cart => cart
)