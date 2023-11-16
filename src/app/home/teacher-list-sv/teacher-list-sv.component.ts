import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Maters } from 'src/app/models/Maters';
import { Student } from 'src/app/models/Student';
import { MaterDetailService } from 'src/app/services/mater-detail.service';
import { MaterService } from 'src/app/services/mater.service';

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
  materDetails: any = [];

  constructor(
    private router: Router,
    private materDetailService: MaterDetailService,
    private materService: MaterService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    let teacherId = sessionStorage.getItem('teacherId');
    this.materDetailService.teacherListSVHD(teacherId).subscribe((data) => {
      console.log(data, 'teacher list sv hd');
      this.data = data;
      // this.students = data;
      this.materDetails = this.data.masterDetails;
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
  // getMaters(year: number){
  //   this.materService.getMater(year).subscribe((data) => {
  //     console.log(data, "mater list");
  //     this.maters = data;
  //   })
  // }
}
