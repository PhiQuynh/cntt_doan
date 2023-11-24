import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';
import { Subject } from 'src/app/models/Subject';
import { MaterService } from 'src/app/services/mater.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-mater-add',
  templateUrl: './mater-add.component.html',
  styleUrls: ['./mater-add.component.css']
})
export class MaterAddComponent implements OnInit {
  currentDate = new Date();
  sub : any
  submited: boolean=false;
  addMaster !: FormGroup

  constructor( private subjectService : SubjectService,
    private router : Router,
    private materService : MaterService,
    private toastr : ToastrService,
    private fb : FormBuilder,){
    
  }

  ngOnInit(): void {
    this.addMaster = this.fb.group({
      masterName: new FormControl("", Validators.required),
      startDate : new FormControl("", Validators.required),
      endDate : new FormControl("", Validators.required),
      subjectId : new FormControl("", Validators.required)
    })
  }

  addMasters(addMaster : FormGroup){
    this.submited = true;
    console.log(addMaster, "add master")
    if(this.addMaster.valid){
      this.materService.addMaster(this.addMaster.value).pipe( 
        catchError((er) => {
          this.toastr.error("Thêm mới thất bại")
          throw new Error("Thêm mới thất bại")
        })
      ).subscribe((data) => {
        this.toastr.success("Thêm mới thành công");
        this.router.navigateByUrl("master/list")
        window.location.reload()
      })
    }
  }

}
