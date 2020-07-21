import * as actionTypes from './actionTypes'

export const addToCart = (item) => ({
    type: actionTypes.ADD_TO_CART,
    item,
})