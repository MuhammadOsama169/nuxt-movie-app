export type RegisterErrorTypes = {
  message: string;
  errors: {
    email?: string[];
    password?: string[];
  };
};
