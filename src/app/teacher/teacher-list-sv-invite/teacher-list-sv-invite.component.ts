import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Maters } from 'src/app/models/Maters';
import { MaterDetailService } from 'src/app/services/mater-detail.service';
import { TeacherStudentService } from 'src/app/services/teacher-student.service';

@Component({
  selector: 'app-teacher-list-sv-invite',
  templateUrl: './teacher-list-sv-invite.component.html',
  styleUrls: ['./teacher-list-sv-invite.component.css']
})
export class TeacherListSvInviteComponent {

  students: any;
  maters: Maters[] = [];
  year: number = 2023;
  data: any = [];
  materDetails: any = [];
  teacherId : any

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private teacherStudentService : TeacherStudentService
  ) {}

  ngOnInit() {
     this.teacherId = sessionStorage.getItem('teacherId');
    this.teacherStudentService.getSV_invite(this.teacherId).subscribe((data) => {
      console.log(data, 'teacher list invite');
    
      this.students = data;
      this.materDetails = this.students.masterDetails;
      console.log(this.materDetails, "mas");
      
    });
  }

  clickGoTo() {
    this.router.navigateByUrl('/add/sv');
  }

  goToDetail(masterDetailId: number) {
    this.router.navigate(['edit/sv'], {
      state: { masterDetailId: masterDetailId },
    });
  }

  AcceptStudent(id:any){
    this.teacherStudentService.acceptStudent(id, this.teacherId).subscribe(data => {
      this.toastr.success("Xác nhận hướng dẫn thành công")
      this.router.navigateByUrl("teacher/list/sv")
    })
  }

  NotAcceptStudent(id:any){
    this.teacherStudentService.not_acceptStudent(id, this.teacherId).subscribe(data => {
      this.toastr.success("Xác nhận không hướng dẫn ")
    })
  }
}
