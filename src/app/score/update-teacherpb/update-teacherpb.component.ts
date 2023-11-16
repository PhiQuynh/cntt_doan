import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';
import { Teacher } from 'src/app/models/Teacher';
import { MaterDetailService } from 'src/app/services/mater-detail.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-update-teacherpb',
  templateUrl: './update-teacherpb.component.html',
  styleUrls: ['./update-teacherpb.component.css']
})
export class UpdateTeacherpbComponent {
  teachers : Teacher[] = [];
  materDetail : any;
  masterDetailId !: number;
  updateScoreForm !: FormGroup;
  submmited : boolean = false


  constructor(private materDetailService : MaterDetailService,
    private router : Router, 
    private toastr : ToastrService, private teacherService : TeacherService,
    private fb : FormBuilder) {
    const state = this.router.getCurrentNavigation()?.extras.state;
      this.masterDetailId = state?.['teacherPB'];
  // this.a = state?.['masterDetailId'];
  }

  ngOnInit(): void {
    this.getMaterDetail();
    this.updateScoreForm = this.fb.group({
      teacherPBId : new FormControl("", Validators.required),
      masterDetailId : this.masterDetailId
    })
    this.getTeacher()
  }

  getMaterDetail(){
    this.materDetailService.getSVById(this.masterDetailId).subscribe((data) => {
      console.log(data, "sv")
      this.materDetail = data
    })
  }

  updateScoreArgument(updateScoreForm : FormGroup){
    console.log(updateScoreForm);
    
    this.submmited = true ;
    if(this.updateScoreForm.valid){
      this.materDetailService.updateTeacherPB(this.updateScoreForm.value).pipe(
        catchError(er => {
          this.toastr.error("Update giảng viên thất bại")
          throw new Error("Update giảng viên thất bại")
        })
      ).subscribe(data => {
        this.toastr.success("Update giảng viên thành công")
        this.router.navigateByUrl("home/page")
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
}
