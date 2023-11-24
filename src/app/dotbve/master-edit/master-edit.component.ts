import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';
import { MaterService } from 'src/app/services/mater.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-master-edit',
  templateUrl: './master-edit.component.html',
  styleUrls: ['./master-edit.component.css']
})
export class MasterEditComponent implements OnInit {
  currentDate = new Date();
  sub : any
  // subject :Subject[] = [];
  submited: boolean=false;
  updateMasters !: FormGroup
  masterId !: number

  constructor( private subjectService : SubjectService,
    private router : Router,
    private materService : MaterService,
    private toastr : ToastrService,
    private fb : FormBuilder,){
      const state = this.router.getCurrentNavigation()?.extras.state;
    this.masterId = state?.['masterId'];
  }

  ngOnInit(): void {
    console.log(this.masterId, "masterid");
    this.updateMasters = this.fb.group({
      masterName: new FormControl("", Validators.required),
      startDate : new FormControl("", Validators.required),
      endDate : new FormControl("", Validators.required),
      subjectId : new FormControl("", Validators.required)
    })
  }
  updateMaster(updateMasters : FormGroup){
    this.submited = true;
    console.log(updateMasters, "add master")
    if(this.updateMasters.valid){
      this.materService.updateMaster(this.masterId,updateMasters.value)
      .subscribe(data => {
        this.toastr.success("Cập nhập thành công");
        this.router.navigateByUrl("master/list")
        window.location.reload()
      })
    }
  }

}
