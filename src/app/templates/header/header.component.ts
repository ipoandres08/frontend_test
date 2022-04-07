import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email_: any;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    let dataEmail: any =  localStorage.getItem('session');
    this.email_ = JSON.parse(dataEmail);
  }
  logout(): void{
    this.auth.logout();
  }
}
