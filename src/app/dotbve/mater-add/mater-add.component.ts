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
  // subject :Subject[] = [];
  submited: boolean=false;
  addMaster !: FormGroup

//   // Lấy thẻ input theo id
// var input = document.getElementById("date");

// // Lấy giá trị ngày tháng từ thẻ input
// var dateValue = input.value;

// // Định dạng ngày tháng thành "ngày-tháng-năm"
// var formattedDate = new Date(dateValue).toLocaleDateString("en-GB");

// // Gán giá trị đã định dạng lại vào thẻ input
// input.value = formattedDate;

  constructor( private subjectService : SubjectService,
    private router : Router,
    private materService : MaterService,
    private toastr : ToastrService,
    private fb : FormBuilder,){
    
  }

  ngOnInit(): void {
    // this.getSubjects();

    this.addMaster = this.fb.group({
      masterName: new FormControl("", Validators.required),
      startDate : new FormControl("", Validators.required),
      endDate : new FormControl("", Validators.required),
      subjectId : new FormControl("", Validators.required)
    })
  }

//   getSubjects(){
//     this.subjectService.getSubject().subscribe((data) => {
//       // console.log(data, "subject")
//       this.sub = data
//       this.sub.subjects = this.subject
//       console.log(this.subject, "subject");
      
//     })
// }

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
