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
            console.log(total, 'total')
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
            const totalBtnCount = total.reduce((acc, entry) => {
                const id = entry.id

                if (acc[id] !== undefined) acc[id] += entry.count
                else acc[id] = entry.count

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

            const y = state.totalIdPrice[id]
            const x = state.totalIdCount[id]

            let countBtn = state.totalBtnCount[newProduct[id].id] - x

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
                totalPrice: state.totalPrice - y,
                totalCount: state.totalCount - x,
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
                newProduct[id].count = newProduct[id].count - 1
                state.totalIdCount[id] = state.totalIdCount[id] - 1
                state.totalCount = state.totalCount - 1
                state.totalBtnCount[newProduct[id].id] =
                    state.totalBtnCount[newProduct[id].id] - 1
                state.totalIdPrice[id] =
                    state.totalIdPrice[id] - newProduct[id].price
                state.totalPrice = state.totalPrice - newProduct[id].price
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
            // console.log(state, 'state')
            const newProduct = {
                ...state.items,
            }
            console.log(state.totalIdCount, 'значение до')
            const nt = state.totalIdCount
            console.log(nt, 'значение после')
            console.log(state.totalBtnCount, 'state.totalBtnCount')

            state.totalBtnCount[newProduct[id].id] =
                state.totalBtnCount[newProduct[id].id] + 1
            state.totalIdCount[id] = state.totalIdCount[id] + 1
            newProduct[id].count = newProduct[id].count + 1
            state.totalIdPrice[id] =
                state.totalIdPrice[id] + newProduct[id].price

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
