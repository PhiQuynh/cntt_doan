import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetSV } from 'src/app/models/GetSV';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';
import { MaterDetailService } from 'src/app/services/mater-detail.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  listSV = {}
  masterDetails :any= []
  getUser : any
  currentUser$ !:Observable<User>;
  user !:User;
  roles !:Role;
  ktraBoMon : boolean = false;
  ktraGiangVien : boolean = false;
  teacher : any
  constructor(
    private router : Router,
     private masterDetailService : MaterDetailService,
      private userService : UserService, 
      private teacherService : TeacherService){}

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

    this.ListSV()
    this.userService.getUser(username).subscribe((data) => {
      console.log(data, "get user");
      this.getUser = data
    })
  }
  
  ListSV(){
      this.masterDetailService.listMasterDetailSV().subscribe(data => {
        this.masterDetails = data.masterDetails;
        console.log(this.masterDetails, "listSV");
      })
  }

}
