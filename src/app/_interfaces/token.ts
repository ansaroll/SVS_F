export interface IToken{
  accessToken:string
  refreshToken:string
  role: "doctorant" | "prof" | "admin"
}