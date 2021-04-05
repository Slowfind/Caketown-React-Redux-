export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchCakes = (sortBy, category) => async (dispatch) => {
    await fetch(
        `/cakes?${category !== null ? `category=${category}` : ''}&_sort=${
            sortBy.type
        }&_order=${sortBy.order}`
    )
        .then((response) => response.json())
        .then((result) => {
            dispatch(setCakes(result))
        })
}

export const setCakes = (items) => ({
    type: 'SET_CAKES',
    payload: items,
})
