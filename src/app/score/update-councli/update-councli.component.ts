import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';
import { Subject } from 'src/app/models/Subject';
import { Teacher } from 'src/app/models/Teacher';
import { CouncliService } from 'src/app/services/councli.service';
import { MaterDetailService } from 'src/app/services/mater-detail.service';
import { SubjectService } from 'src/app/services/subject.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-update-councli',
  templateUrl: './update-councli.component.html',
  styleUrls: ['./update-councli.component.css']
})
export class UpdateCouncliComponent {
   teachers : Teacher[] = [];
  materDetail : any;
  masterDetailId !: number;
  updateCouncliForm !: FormGroup;
  submmited : boolean = false
  // subjects : Subject[] = []
  a :any

  constructor(
    private materDetailService : MaterDetailService,
    private router : Router, 
    private toastr : ToastrService, private teacherService : TeacherService,
    private fb : FormBuilder,
    private councliService : CouncliService) {
    const state = this.router.getCurrentNavigation()?.extras.state;
      this.masterDetailId = state?.['councli'];
  // this.a = state?.['masterDetailId'];
  }

  ngOnInit(): void {
    this.getMaterDetail();
    this.updateCouncliForm = this.fb.group({
      coucilId : new FormControl("", Validators.required),
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
    if(this.updateCouncliForm.valid){
      // cons
      this.materDetailService.updateCouncli(this.updateCouncliForm.value)
      // .pipe(
      //   catchError(er => {
      //     this.toastr.error("Update hộ đồng thất bại !")
      //     throw new Error("Update hộ đồng thất bại !")
      //   })
      // )
      .subscribe(data => {
        this.toastr.success("Update hội đồng thành công")
        this.router.navigateByUrl("home/page")
        window.location.reload()
      })
    }
  }
  getTeacher(){
    this.councliService.getCouncli().subscribe((data) => {
      console.log(data, "subject list")
      this.a = data
      // this.a.subjects = this.subjects
      // console.log(this.subjects, "sub");
      
    })
  }


}
