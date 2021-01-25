import { SAVE_USER, UserDataAction } from "./userDataTypes";
import { User } from "@firebase/auth-types";

export const saveUser = (user: User | null): UserDataAction => ({
  type: SAVE_USER,
  user,
});
