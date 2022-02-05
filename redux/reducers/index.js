import cartReducer from './cartReducer'
import {combineReducers} from 'redux'

let reducers = combineReducers({
    cartReducer
})

const rootReducer =(state,action)=>{
    return reducers(state,action)
}

export default rootReducer