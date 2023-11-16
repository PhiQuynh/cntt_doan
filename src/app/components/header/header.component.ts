import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // user$:Observable<User>;

  // constructor(private userService: UserService,private router:Router){

  

  // ngOnInit(): void {
  //   this.userService.getUser(JSON.parse(localStorage.getItem("token"))?.username)
  //   .subscribe(user =>this.userService.currentUserSub.next(user));

  //   this.user$=this.userService.currentUser$;



  // }
  // public signOut(){
  //   this.userService.logout();
  //   this.router.navigateByUrl("/QLCSVC/login")
  // }

}
