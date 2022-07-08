import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService , private router: Router) { }

  username: string = ""
  password: string = ""

  ngOnInit(): void {
  }

  public onSubmit() {
    this.loginService.login(this.username, this.password);
  }

}
