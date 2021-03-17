import {combineReducers} from 'redux'
import cakes from '../reducers/cakes'
import filters from '../reducers/filters'
import cart from '../reducers/cart'

const rootReducer = combineReducers({ cakes, filters, cart })

export default rootReducer