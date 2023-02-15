import { ADD_POSITION } from "store/constants/position-constant";

export const positionReducer = (state = [], action) => {

    switch (action.type) {
        case ADD_POSITION:
            return action.positions

        default:
            return state
    }
}