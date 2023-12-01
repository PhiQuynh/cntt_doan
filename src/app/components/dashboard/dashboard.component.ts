import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  currentUser$ !:Observable<User>;
  user !:User;
  roles !:Role;
  ktraBoMon : boolean = false;
  ktraGiangVien : boolean = false;
  getUser : any
  teacher : any
  constructor(private userService: UserService,
    private router : Router, private teacherService : TeacherService){
  }
  ngOnInit(): void {
    let username = sessionStorage.getItem("username");
    this.userService.getUser(username).subscribe((data) => {
      console.log(data, "get user");
      this.getUser = data
      if(this.getUser?.roleName === 'Bộ môn'){
      this.ktraBoMon = true
    } 
    if (this.getUser?.roleName === 'Giảng viên'){
      this.ktraGiangVien = true;
      this.teacherService.getTeacherById().subscribe((data) => {
        console.log(data, "teacher");
        
          this.teacher = data
          sessionStorage.setItem("teacherId", this.teacher.teacherId)
      })
    }
    })
  }

  logout(){
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('token_type');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('teacherId');
    this.router.navigateByUrl("/login")
    // window.location.reload();
    location.reload();
  }
  // isQuanLy():boolean {
  //   return this.user?.roles.some(role => role.roleName === 'Bộ môn');
  // }
  // isTeacher():boolean {
  //   return this.user?.roles.some(role => role.roleName === 'Giảng viên');
  // }


}

