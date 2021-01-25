export const SAVE_USER = "userData/savePost";
import { User } from "@firebase/auth-types";

export interface userDataState {
  user: User | null;
}

interface SaveUserAction {
  type: typeof SAVE_USER;
  user: User | null;
}

export type UserDataAction = SaveUserAction;
