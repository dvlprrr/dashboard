import { createStore, combineReducers } from "redux"
import { positionReducer } from "./reducers/position-redcuer"

export const store = createStore(combineReducers({
    position: positionReducer,
}))