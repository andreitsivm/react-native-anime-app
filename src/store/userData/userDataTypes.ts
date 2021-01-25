export const SAVE_TOKEN = "userData/savePost";

export interface userDataState {
  token: string | null;
}

interface SaveTokenAction {
  type: typeof SAVE_TOKEN;
  token: string;
}

export type UserDataAction = SaveTokenAction;
