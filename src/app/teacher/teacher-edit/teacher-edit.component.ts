import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';
import { Subject } from 'src/app/models/Subject';
import { SubjectService } from 'src/app/services/subject.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {
  subjects :Subject[] = [];
  updateTeacherForm !: FormGroup
  submited : boolean = false
  teacher : any
 teacherId =  sessionStorage.getItem('teacherId');

  constructor(
    private subjectService : SubjectService, 
    private router : Router,
    private fb : FormBuilder,
    private toastr : ToastrService,
    private teacherService : TeacherService
    ){}

  ngOnInit(): void {
    this.teacherService.getTeacherById().subscribe((data) => {
      console.log(data, "teacher");
        this.teacher = data
    })
    
    this.updateTeacherForm = this.fb.group({
      teacherName: new FormControl("", Validators.required),
      email : new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required),
      researchDirection : new FormControl("", Validators.required),
      subjectId: new FormControl("", Validators.required)
    })

    this.getSubjects();


  }

  getSubjects(){
    this.subjectService.getSubject().subscribe((data) => {
      console.log(data, "subject")
      this.subjects = data
    })
}

updateTeachers(updateTeacherForm : FormGroup){
  this.submited = true;
  console.log(updateTeacherForm, "add master")
  if(this.updateTeacherForm.valid){
    this.teacherService.updateTeacher(this.updateTeacherForm.value,this.teacherId ).pipe( 
      catchError((er) => {
        this.toastr.error("Cập nhập thất bại !")
        throw new Error("Cập nhập thất bại !")
      })
    ).subscribe((data) => {
      this.toastr.success("Cập nhập thành công");
      this.router.navigateByUrl("home/page")
        
    })
  }
}

}
