const initialState = {
    loading: false,
    batik: [],
    error: []
}

function batikReducer(state= initialState, action) {
    const { type, payload } = action
    switch(type) {
        case 'BATIK/SETDATA': 
          return { ...state, batik: payload}
        case 'BATIK/SETLOADING': 
          return { ...state, loading: payload}
        case 'BATIK/SETERROR': 
          return { ...state, error: [...state.error, payload]}
        default: 
        return state
    }
}

export default batikReducer