import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from '../shared/nav/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private route:Router, private userService:UserService) { }

  signup(blog){
    return this.http.post
    ("http://localhost:3000/api/v1/users/create", blog)
  }

  login(user){
    return this.http.post('http://localhost:3000/api/v1/users/login', user)
  }

  autoSignIn(){
    //get token from browser
    const token = this.getToken();
    if(!token){
      return;
    }

    //send request to get user information
    this.http.get("http://localhost:3000/api/v1/users/me",
    {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    }).subscribe((res:any)=>{
      if(res.success){
        console.log(res.payload.user);
        this.userService.setCurrentUser(res.payload.user);
        console.log(res);
        //navigate to home
        this.route.navigate(['/home'])
      }
    })
  }

  logout(){
    const token = this.getToken();

    this.http.delete("http://localhost:3000/api/v1/users/logout", {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    }).subscribe((res:any)=>{
      if(res.success){
        this.removeToken();
        this.userService.setCurrentUser(null);
        this.route.navigate(['/login'])
      }
    })
  }

  getToken(){
    return JSON.parse(localStorage.getItem('token'))
  }

  setToken(token){
     localStorage.setItem('token', JSON.stringify(token))
  }

  removeToken(){
    localStorage.removeItem('token')
  }
}
