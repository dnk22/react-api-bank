export type TLoginFormData = {
  username: string;
  password: string;
};

export type TRegisterFormData = TLoginFormData & {
  email: string;
  rePassword: string;
};
