export interface User {
  _id?: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  created_at?: Date;
  updated_at?: Date;
}
