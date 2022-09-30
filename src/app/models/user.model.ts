export class User {
  _id?: string;
  imageUrl?: string;
  password?: string;
  userId?: string;
  name?: string;
  firstName?: string;
  nationality?: string;
  gender?: string;
  dateOfBirth?: string;
  yearBacc?: string;
  adress?: string;
  cin?: string;
  serieBacc?: string;
  codeDoubling?: string;
  email?: string;
  telephone?: string;
  isBoursier?: boolean;
  tauxBourse?: number;
  about?: string;
  createdAt?: Date;
  updatedAt?: Date;
  passwordConfirmation?: string;
  role?: "doctorant" | "prof" | "admin"
}
