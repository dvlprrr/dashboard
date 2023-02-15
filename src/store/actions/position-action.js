import { ADD_POSITION } from "store/constants/position-constant";

export const addPositions = (positions) => ({
    type: ADD_POSITION,
    positions,
})