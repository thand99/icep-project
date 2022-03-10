import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL: string ='http://localhost:3000/api/v1/users';

  constructor(private http: HttpClient) { }

  public login(data:any){
    console.log('Welcome to login endpoint')
    return this.http.post(this.URL,data)
  }


  public signup(data:any){
    console.log('Welcome to signup endpoint')
    return this.http.post(this.URL,data)
  }
  public forgotPassword(data:any){
    console.log('Welcome to forgotPassword endpoint')
    return this.http.post(this.URL,data)
  }
  public updatePassword(data:any){
    console.log('Welcome to updatePassword endpoint')
    return this.http.patch(this.URL,data)
  }
}

