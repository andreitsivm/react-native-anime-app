import { combineReducers } from "redux";
import { userDataReducer } from "./userData";

export const rootReducer = combineReducers({
  userData: userDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
