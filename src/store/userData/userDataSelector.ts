import { RootState } from "./../rootReducer";
import { createSelector } from "reselect";

const userDataSelector = (state: RootState) => state.userData;

export const userSelector = createSelector(
  userDataSelector,
  ({ user }) => user
);
