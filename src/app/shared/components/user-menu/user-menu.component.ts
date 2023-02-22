import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
})
export class UserMenuComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser():void {
    console.log(this.auth.isLoggedIn())

    if(!this.auth.isLoggedIn()) {
      this.auth.login().then(() => {
        this.router.navigate(['/registration/login'])
      })
    }else {
      return
    }
  }

}
