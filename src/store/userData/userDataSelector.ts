import { RootState } from "./../rootReducer";
import { createSelector } from "reselect";

const userData = (state: RootState) => state.userData;

export const tokenSelector = createSelector(userData, (token) => token);
