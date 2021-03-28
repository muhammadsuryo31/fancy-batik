const initialState = {
    favourites: []
}

function favouriteReducer(state= initialState, action) {
    const { type, payload } = action
    switch(type) {
        case 'FAVOURITES/ADD':
            return {...state, favourites: [...state.favourites, payload]}
        case "FAVOURITES/DELETE":
            return {...state, favourites: payload}
        default: 
        return state
    }
}

export default favouriteReducer