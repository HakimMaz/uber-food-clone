import {createStore} from 'redux'
import Reducer from './reducers/index'

export default function configureStore(initialState){
    return createStore(Reducer,initialState)
}