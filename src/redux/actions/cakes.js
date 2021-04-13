export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchCakes = (sortBy, category) => async (dispatch) => {
    dispatch(setLoaded(false))
    const response = await fetch(
        `http://localhost:3001/cakes?${
            category !== null ? `category=${category}` : ''
        }&_sort=${sortBy.type}&_order=${sortBy.order}`
    )
    const json = await response.json()
    console.log(json)
    setTimeout(() => {
        dispatch(setLoaded(true))
        dispatch(setCakes(json))
    }, 1000)
}

export const setCakes = (items) => ({
    type: 'SET_CAKES',
    payload: items,
})
