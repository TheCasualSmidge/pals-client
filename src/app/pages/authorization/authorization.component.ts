import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  public noAccount: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public signUp () {
    this.noAccount = true;
    console.log('clicked to signup')
  }

  public login () {
    this.noAccount = false;
    console.log('clicked to login')
  }
}
