import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public authService: AuthService
            , public router: Router
            , private toastr: ToastrService) { }

  ngOnInit() {
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  entrar(){
    this.router.navigate(['/user/login']);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

}
