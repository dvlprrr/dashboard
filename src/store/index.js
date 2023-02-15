import { createStore, combineReducers } from "redux"
import { positionReducer } from "./reducers/position-redcuer"
import { filterReducer } from "./reducers/filter-reducer"

export const store = createStore(combineReducers({
    position: positionReducer,
    filter: filterReducer,
}))