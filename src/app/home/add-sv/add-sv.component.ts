import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MaterDetailService } from 'src/app/services/mater-detail.service';
import { Subject } from 'src/app/models/Subject';
import { SubjectService } from 'src/app/services/subject.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { Teacher } from 'src/app/models/Teacher';
import { Maters } from 'src/app/models/Maters';
import { MaterService } from 'src/app/services/mater.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-sv',
  templateUrl: './add-sv.component.html',
  styleUrls: ['./add-sv.component.css'],
  
})
export class AddSvComponent implements OnInit {

  addForm !: FormGroup;
  subjects :Subject[] = [];
  submited: boolean=false;
  teachers : Teacher[] = [];
  maters : Maters[] = [];
  year: number = 2023;
  
  constructor(private fb : FormBuilder,
     private materDetailService : MaterDetailService,
     private toastr:ToastrService, 
     private teacherService : TeacherService,
     private materService : MaterService,
     private router : Router){
  }

  ngOnInit(): void {
    
    this.addForm = this.fb.group({
      studentName: new FormControl("", Validators.required),
      mssv : new FormControl("", Validators.required),
      studentClass : new FormControl("", Validators.required),
      titleNameVn : new FormControl("", Validators.required),
      titleNameEn : new FormControl("", Validators.required),
      masterId : new FormControl("", Validators.required),
      teacherHDId : new FormControl("", Validators.required)
    })
    this.getTeacher();
    this.getMaters(this.year)
  }

  getMaters(year: number){
    this.materService.getMater(year).subscribe((data) => {
      console.log(data, "mater list");
      this.maters = data;
    })
  }

    addSV(addForm : FormGroup){
      this.submited = true;
      console.log(addForm, "add sv")
      if(this.addForm.valid){
        this.materDetailService.addSV(this.addForm.value).pipe(
          catchError(() => {
            this.toastr.error("Thêm mới sinh viên không thành công!")
            throw new Error("Thêm mới sinh viên không thành công!")
          })
        ).subscribe(sv => {
          this.router.navigateByUrl("home/list/sv")
          this.toastr.success("Thêm mới sinh viên thành công!")
          window.location.reload()
        })
      }
    }

    getTeacher(){
      this.teacherService.getTeacher().subscribe((data) => {
        console.log(data, "teacher list")
        this.teachers = data
      })
    }

    onClick(){
      this.router.navigateByUrl("home/list/sv")
    }

}
