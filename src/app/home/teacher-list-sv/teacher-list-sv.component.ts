import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Maters } from 'src/app/models/Maters';
import { Student } from 'src/app/models/Student';
import { MaterDetailService } from 'src/app/services/mater-detail.service';
import { MaterService } from 'src/app/services/mater.service';
import { TeacherStudentService } from 'src/app/services/teacher-student.service';

@Component({
  selector: 'app-teacher-list-sv',
  templateUrl: './teacher-list-sv.component.html',
  styleUrls: ['./teacher-list-sv.component.css'],
})
export class TeacherListSvComponent implements OnInit {
  students: any;
  maters: Maters[] = [];
  year: number = 2023;
  data: any = [];
  materDetail: any = [];
  a: any

  constructor(
    private router: Router,
    private teacherStudentService : TeacherStudentService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    let teacherId = sessionStorage.getItem('teacherId');
    this.teacherStudentService.getSV_accept(teacherId).subscribe((data) => {
      console.log(data, 'teacher list sv hd');
     this.a = data;
     this.materDetail = this.a.masterDetails
     console.log(this.a.materDetails, "a");
     
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
}
