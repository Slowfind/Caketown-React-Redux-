export const addCakesToCart = (cakesObj) => ({
    type: 'ADD_CAKES_CART',
    payload: cakesObj
})

export const ClearCart = () => ({
    type: 'CLEAR_CART',
})

export const plusCartItem = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload: id
})

export const minusCartItem = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id
})

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id
})