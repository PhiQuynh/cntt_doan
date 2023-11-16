import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'ADMIN HUMG';
  userLogin: any;
  constructor (private router : Router, private userService : UserService){}

ngOnInit(): void {
  this.userService.User$.subscribe(user =>{
    this.userLogin=user
  });
  
  if(!sessionStorage.getItem("access_token")) {
    this.router.navigate(['login'])
  } else {
    this.router.navigate(['/home/page'])
    
  }

}

}
