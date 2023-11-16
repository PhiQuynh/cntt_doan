import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';
import { Maters } from 'src/app/models/Maters';
import { Subject } from 'src/app/models/Subject';
import { CouncliService } from 'src/app/services/councli.service';
import { MaterService } from 'src/app/services/mater.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-councli-add',
  templateUrl: './councli-add.component.html',
  styleUrls: ['./councli-add.component.css']
})
export class CouncliAddComponent implements OnInit {

  subjects :Subject[] = [];
  submited: boolean=false;
  addCouncli !: FormGroup
  maters : Maters[] = [];
  year: number = 2023;

  constructor( private subjectService : SubjectService,
    private router : Router,
    private materService : MaterService,
    private councliService : CouncliService,
    private toastr : ToastrService,
    private fb : FormBuilder,){
    
  }

  ngOnInit(): void {
    this.getSubjects();
    this.getMaters(this.year);

    this.addCouncli = this.fb.group({
      coucilName: new FormControl("", Validators.required),
      masterId : new FormControl("", Validators.required),
      subjectId : new FormControl("", Validators.required)
    })
  }

  getMaters(year: number){
    this.materService.getMater(year).subscribe((data) => {
      console.log(data, "mater list");
      this.maters = data;
    })
  }

  getSubjects(){
    this.subjectService.getSubject().subscribe((data) => {
      console.log(data, "subject")
      this.subjects = data
    })
  }

  addCounclis(addCouncli : FormGroup){
    this.submited = true;
    console.log(addCouncli, "add master")
    if(this.addCouncli.valid){
      this.councliService.addCouncli(this.addCouncli.value).pipe(
        catchError(() => {
          this.toastr.error("Thêm mới thất bại!")
          throw new Error("Thêm mới thất bại!")
        })
      ).subscribe(() => {
          this.toastr.success("Thêm mới thành công");
          this.router.navigateByUrl("master/list")
          window.location.reload()
      })
    }
  }

}
