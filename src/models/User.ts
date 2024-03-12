import { Profil } from "./Profil";

export interface User {
  _id?: string;
  firstname: string;
  lastname: string;
  fullName?: string;
  fullname?: string;
  email: string;
  phone: string;
  profile: Profil;
  password: string;
  created_at?: Date;
  updated_at?: Date;
}
