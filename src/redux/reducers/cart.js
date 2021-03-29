const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
    totalIdPrice: 0,
    totalIdCount: 0,
    totalBtnCount: 0,
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0)

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CAKES_CART': {
            const product = action.payload
            const uniqId = (product) => {
                return `id${product.id}_${product.type}_${product.size}`
            }
            product.uniqId = uniqId(product)

            product.count = 1
            for (let key in state.items) {
                if (state.items[key].uniqId === product.uniqId) {
                    product.count = state.items[key].count + 1
                }
            }
            const newProduct = {
                ...state.items,
                [product.uniqId]: product,
            }
            const total = Object.keys(newProduct).map((key) => newProduct[key]) // [{},{},...{}]

            const totalBtnCount = total.reduce((acc, entry) => {
                const id = entry.id

                if (acc[id] !== undefined) acc[id] += entry.count
                else acc[id] = entry.count

                return acc
            }, {})
            const totalIdPrice = total.reduce((acc, entry) => {
                const id = entry.uniqId
                if (acc[id] !== undefined) acc[id] = entry.price
                else acc[id] = entry.price * entry.count

                return acc
            }, {})

            const totalIdCount = total.reduce((acc, entry) => {
                const id = entry.uniqId
                acc[id] = entry.count

                return acc
            }, {})
            const totalPrice = total.reduce(
                (sum, obj) => obj.price * obj.count + sum,
                0
            )

            return {
                ...state,
                items: newProduct,
                totalPrice,
                totalCount: state.totalCount + 1,
                totalIdPrice,
                totalIdCount,
                totalBtnCount: totalBtnCount,
            }
        }

        case 'REMOVE_CART_ITEM': {
            const newItems = {
                ...state.items,
            }
            console.log(action.payload)
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount = newItems[action.payload].items.length
            delete newItems[action.payload]

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            }
        }
        case 'MINUS_CART_ITEM': {
            const oldItems = state.items[action.payload].items
            const newObjItems =
                oldItems.length > 1
                    ? state.items[action.payload].items.slice(1)
                    : oldItems
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            }

            const totalCount = Object.keys(newItems).reduce(
                (sum, key) => newItems[key].items.length + sum,
                0
            )
            const totalPrice = Object.keys(newItems).reduce(
                (sum, key) => newItems[key].totalPrice + sum,
                0
            )

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            }
        }
        case 'PLUS_CART_ITEM': {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ]
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            }

            const totalCount = Object.keys(newItems).reduce(
                (sum, key) => newItems[key].items.length + sum,
                0
            )
            const totalPrice = Object.keys(newItems).reduce(
                (sum, key) => newItems[key].totalPrice + sum,
                0
            )

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            }
        }
        case 'CLEAR_CART':
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0,
            }
        default:
            return state
    }
}

export default cart
