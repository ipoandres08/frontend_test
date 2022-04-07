import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string | undefined ;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    // this.username  = this.auth.user();
      
  }
  logout(): void{
    this.auth.logout();
  }

}
