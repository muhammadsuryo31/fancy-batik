export function setData (payload) {
    return {type: 'BATIK/SETDATA', payload}
}
export function setLoading (payload) {
    return {type: 'BATIK/SETLOADING', payload}
}
export function setError (payload) {
    return {type: 'BATIK/SETERROR', payload}
}
export function fetchData () {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true))
            const response = await fetch('https://batikita.herokuapp.com/index.php/batik/all')
            const result = await response.json()
            dispatch(setData(result.hasil))
            dispatch(setLoading(false))
        } catch (err) {
            dispatch(setError(err))
        }
    }
}

export function addFavourites (payload) {
    return {type: 'FAVOURITES/ADD', payload}
}
export function deleteFavourites (payload) {
    return {type: 'FAVOURITES/DELETE', payload}
}