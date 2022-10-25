import { createStore } from 'redux'
import riwayatReducer from './riwayat'
import {combineReducers} from 'redux'
import chatReducer from './chat'

const allReducers = combineReducers({
    riwayat: riwayatReducer,
    chat:chatReducer
})

const store = createStore(allReducers)

export default store