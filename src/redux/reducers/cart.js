const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
    totalIdPrice: 0,
    totalIdCount: 0,
    totalBtnCount: 0,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CAKES_CART': {
            const product = action.payload
            const uniqId = (product) => {
                return `id${product.id}_${product.type}_${product.size}`
            }
            product.uniqId = uniqId(product).replace(' ', '_')
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

            const arrNewProduct = Object.values(newProduct)

            const totalIdPrice = arrNewProduct.reduce((acc, entry) => {
                acc[entry.uniqId] = entry.price * entry.count
                return acc
            }, {})

            const totalIdCount = arrNewProduct.reduce((acc, entry) => {
                acc[[entry.uniqId]] = entry.count
                return acc
            }, {})

            const totalPrice = arrNewProduct.reduce(
                (sum, obj) => obj.price * obj.count + sum,
                0
            )

            const totalBtnCount = arrNewProduct.reduce((acc, entry) => {
                acc[entry.id] !== undefined
                    ? (acc[entry.id] += entry.count)
                    : (acc[entry.id] = entry.count)
                return acc
            }, {})

            return {
                ...state,
                items: newProduct,
                totalPrice,
                totalCount: state.totalCount + 1,
                totalIdPrice,
                totalIdCount,
                totalBtnCount,
            }
        }

        case 'REMOVE_CART_ITEM': {
            const id = action.payload
            const newProduct = {
                ...state.items,
            }

            const prevTotalIdPrice = state.totalIdPrice[id]
            const prevTotalIdCount = state.totalIdCount[id]

            let countInItem = state.totalBtnCount[newProduct[id].id]
            let countBtn = countInItem - prevTotalIdCount

            state.totalBtnCount[newProduct[id].id] = countBtn
            if (state.totalBtnCount[newProduct[id].id] === 0) {
                state.totalBtnCount[newProduct[id].id] = undefined
            }
            delete state.totalIdCount[id]
            delete state.totalIdPrice[id]
            delete newProduct[id]

            return {
                ...state,
                items: newProduct,
                totalPrice: state.totalPrice - prevTotalIdPrice,
                totalCount: state.totalCount - prevTotalIdCount,
                totalIdPrice: state.totalIdPrice,
                totalIdCount: state.totalIdCount,
                totalBtnCount: state.totalBtnCount,
            }
        }
        case 'MINUS_CART_ITEM': {
            const id = action.payload
            const newProduct = {
                ...state.items,
            }
            if (state.totalIdCount[id] > 1) {
                newProduct[id].count -= 1
                state.totalIdCount[id] -= 1
                state.totalCount -= 1
                state.totalBtnCount[newProduct[id].id] -= 1
                state.totalIdPrice[id] -= newProduct[id].price
                state.totalPrice -= newProduct[id].price
            }

            return {
                ...state,
                items: newProduct,
                totalPrice: state.totalPrice,
                totalCount: state.totalCount,
                totalIdPrice: state.totalIdPrice,
                totalIdCount: state.totalIdCount,
                totalBtnCount: state.totalBtnCount,
            }
        }
        case 'PLUS_CART_ITEM': {
            const id = action.payload
            const newProduct = {
                ...state.items,
            }
            state.totalBtnCount[newProduct[id].id] += 1
            state.totalIdCount[id] += 1
            newProduct[id].count += 1
            state.totalIdPrice[id] += newProduct[id].price

            return {
                ...state,
                items: newProduct,
                totalPrice: state.totalPrice + newProduct[id].price,
                totalCount: state.totalCount + 1,
                totalIdPrice: state.totalIdPrice,
                totalIdCount: state.totalIdCount,
                totalBtnCount: state.totalBtnCount,
            }
        }
        case 'CLEAR_CART':
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0,
                totalIdPrice: 0,
                totalIdCount: 0,
                totalBtnCount: 0,
            }
        default:
            return state
    }
}

export default cart
