import {combineReducers} from "redux"
import {productReducer} from "./productReducer"
import {userReducer} from "./userReducer"
export const rootReducers=combineReducers({userReducer,productReducer})