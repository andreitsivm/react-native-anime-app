import { SAVE_USER, UserDataAction, userDataState } from "./userDataTypes";
import {} from "firebase";

const initialState: userDataState = {
  user: null,
};

export const userDataReducer = (
  state = initialState,
  action: UserDataAction
) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
