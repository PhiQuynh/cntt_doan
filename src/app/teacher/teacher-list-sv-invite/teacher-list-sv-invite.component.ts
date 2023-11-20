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

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private teacherStudentService : TeacherStudentService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    let teacherId = sessionStorage.getItem('teacherId');
    this.teacherStudentService.getSV_invite(teacherId).subscribe((data) => {
      console.log(data, 'teacher list invite');
      // this.data = data;
      // this.students = data;
      this.materDetails = data;
    });

    // this.getMaters(this.year);
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
    this.teacherStudentService.acceptStudent(id).subscribe(data => {
      this.toastr.success("Xác nhận hướng dẫn thành công")
    })
  }

  NotAcceptStudent(id:any){
    this.teacherStudentService.not_acceptStudent(id).subscribe(data => {
      this.toastr.success("Xác nhận không hướng dẫn ")
    })
  }


  // getMaters(year: number){
  //   this.materService.getMater(year).subscribe((data) => {
  //     console.log(data, "mater list");
  //     this.maters = data;
  //   })
  // }
}
