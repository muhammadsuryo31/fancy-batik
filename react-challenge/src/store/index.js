import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import batikReducer from './reducers/batik'
import favouriteReducer from './reducers/favourite'
import logger from './middlewares/logger'

const rootReducer = combineReducers({
    batik: batikReducer,
    favourites: favouriteReducer
})

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store