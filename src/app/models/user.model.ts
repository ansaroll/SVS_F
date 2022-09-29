export class User {
  id?: number;
  _id?:string;
  name?:string
  email?: string;
  telephone?: string;
  isBoursier?: boolean;
  tauxBourse?:number;
  about?: string;
  imageUrl?: string;
  createdDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  password?:string;
  passwordConfirmation?: string;
  role?: "doctorant" | "prof" | "admin"
}
