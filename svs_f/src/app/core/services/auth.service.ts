import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private token!: string;

  login(){

    this.token = 'MyFakeToken' // ce sera le token venant du back

  }

  getToken() : string {
    return this.token;
  }

}
