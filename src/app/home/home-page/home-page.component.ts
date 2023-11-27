import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetSV } from 'src/app/models/GetSV';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';
import { CouncliService } from 'src/app/services/councli.service';
import { MaterDetailService } from 'src/app/services/mater-detail.service';
import { MaterService } from 'src/app/services/mater.service';
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
  countMasterDetail : any
  countMasters : any
  countTeachers : any
  countCounclis : any
  svHD: any
  svPB : any
  svLessThan : any
  svMoreThan : any

  constructor(
    private router : Router,
     private masterDetailService : MaterDetailService,
      private userService : UserService, 
      private teacherService : TeacherService,
      private councliService : CouncliService,
      private masterService : MaterService){}

  ngOnInit(): void {
    let username = sessionStorage.getItem("username");
    this.userService.getUser(username).subscribe((data) => {
      console.log(data, "get user");
      this.getUser = data
      if(this.getUser?.roleName === 'Bộ môn'){
      this.ktraBoMon = true
      this.countCouncli();
      this.countMaster();
      this.countMasterDetals();
      this.countTeacher();
    } 
    if (this.getUser?.roleName === 'Giảng viên'){
      this.ktraGiangVien = true;
      this.teacherService.getTeacherById().subscribe((data) => {
        console.log(data, "teacher");
          this.teacher = data
          sessionStorage.setItem("teacherId", this.teacher.teacherId)
          this.countSVLessThan();
          this.countSVMoreThan();
          this.countMasterDetailByTeacherHd(this.teacher.teacherId);
          this.countMasterDetailByTeacherPB(this.teacher.teacherId)
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

  countMasterDetals(){
    this.masterDetailService.countMasterDetail().subscribe(data => {
      console.log(data, "count");
         this.countMasterDetail = data
         this.ktraBoMon = true;
    })
  }

  countMaster(){
    this.masterService.countMaster().subscribe(data => {
      console.log(data, "count");
      this.countMasters = data
      this.ktraBoMon = true;
    })
  }

  countTeacher(){
    this.teacherService.countTeacher().subscribe(data => {
      console.log(data, "count");
       this.countTeachers = data
       this.ktraBoMon = true;
    })
  }
  countCouncli(){
    this.councliService.countCouncli().subscribe(data => {
      console.log(data, "count");
         this.countCounclis = data
         this.ktraBoMon = true;
    })
  }

  countSVMoreThan(){
    this.masterDetailService.countSVMoreThan().subscribe(data => {
      console.log(data, "count");
         this.svMoreThan = data
         this.ktraGiangVien = true;
    })
  }
  countMasterDetailByTeacherHd(teacherHD : any){
    this.masterDetailService.countMasterDetailByTeacherHd(teacherHD).subscribe(data => {
      console.log(data, "count");
         this.svHD = data
         this.ktraGiangVien = true;
    })
  }
  countMasterDetailByTeacherPB( teacherPB: any){
    this.masterDetailService.countMasterDetailByTeacherPB(teacherPB).subscribe(data => {
      console.log(data, "count");
         this.svPB = data
         this.ktraGiangVien = true;
    })
  }
  countSVLessThan(){
    this.masterDetailService.countSVLessThan().subscribe(data => {
      console.log(data, "count");
         this.svLessThan = data
         this.ktraGiangVien = true;
    })
  }
}
