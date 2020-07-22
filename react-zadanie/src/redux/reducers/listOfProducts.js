import * as actionTypes from '../actions/actionTypes'
const listOfProducts = require('../../assets/items.json')
const defaultState = {
    products: [...listOfProducts],
    cart: [],
}

export const listOfProductsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const isTheSameKindOfProduct = state.cart
                .some(product => product.id === action.product.id)
            if (!isTheSameKindOfProduct) {
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        {
                            ...action.product,
                            amount: 1,
                        }
                    ]
                }
            }

        default:
            return state
    }
}