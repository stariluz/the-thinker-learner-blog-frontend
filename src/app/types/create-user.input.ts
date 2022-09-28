export type CreateUserInput = {
  username: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  birthday: Date;
  picture?: string;
}