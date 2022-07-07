import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  private loggedIn = false;
  private loginUrl = 'http://localhost:8080/api/v1/login';
  constructor(private http: HttpClient) {}

  public login(username: string, password: string) {
    let options = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    };

    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    this.http.post(this.loginUrl, body.toString(), options).subscribe((response:any) => {
      console.log(response);
      
      localStorage.setItem('JWT-ACCESS-TOKEN',"Bearer "+ response.access_token);
      localStorage.setItem('JWT-REFRESH-TOKEN',"Bearer "+ response.refresh_token);
    });
  }
}
