export type LoginDetailsError = {
  email: [];
  password: [];
};

export enum LoginDetailsErrorKeys {
  email = "email",
  password = "password",
}

export const initialData: LoginDetailsError = {
  email: [],
  password: [],
};
