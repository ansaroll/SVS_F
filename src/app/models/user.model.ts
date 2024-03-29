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
  isBoursier?: string;
  tauxBourse?: string;
  about?: string;
  createdAt?: Date;
  pictureUrl?:string;
  updatedAt?: Date;
  passwordConfirmation?: string;
  role?: "doctorant" | "prof" | "admin";
  poste?: string;
  im?: string;
}


export class TPayloadPdp {
  userId?:string | null;
  file?:string;
}
