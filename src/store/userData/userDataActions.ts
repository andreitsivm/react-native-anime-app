import { SAVE_TOKEN, UserDataAction } from "./userDataTypes";

export const saveToken = (token: string): UserDataAction => ({
  type: SAVE_TOKEN,
  token,
});
