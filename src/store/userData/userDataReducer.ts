import { SAVE_TOKEN, UserDataAction, userDataState } from "./userDataTypes";

const initialState: userDataState = {
  token: null,
};

export const userDataReducer = (
  state = initialState,
  action: UserDataAction
) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    default:
      state;
  }
};
