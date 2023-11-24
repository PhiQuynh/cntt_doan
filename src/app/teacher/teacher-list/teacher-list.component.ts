import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { Teacher } from 'src/app/models/Teacher';
import { MaterDetailService } from 'src/app/services/mater-detail.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit{
  teachers : Teacher[] = []

  constructor(private router : Router,
     private teacherService : TeacherService){}

  ngOnInit(): void {
    this.getTeacher();
  }

  clickEdit(teacherId : number){
    this.router.navigate(['teacher/edit'], {
      state: { teacherId: teacherId },
    })
  }

  goToDetail(masterDetailId: number) {
    this.router.navigate(['edit/sv'], {
      state: { masterDetailId: masterDetailId },
    });
  }

  getTeacher(){
      this.teacherService.getTeacher().subscribe((data) =>{
        console.log(data, "list teacher");
        this.teachers = data
      })
  }
}
