import * as actionTypes from '../actions/actionTypes'

const defaultState = {
    products: [],
    cart: [],
}

export const listOfProductsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                products: {
                    ...state.products,
                    ...action.product,
                }
            }

        default:
            return state
    }
}