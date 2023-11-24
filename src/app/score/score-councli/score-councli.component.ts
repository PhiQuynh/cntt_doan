import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';
import { MaterDetailService } from 'src/app/services/mater-detail.service';

@Component({
  selector: 'app-score-councli',
  templateUrl: './score-councli.component.html',
  styleUrls: ['./score-councli.component.css']
})
export class ScoreCouncliComponent {
  materDetail : any;
  masterDetailId !: number;
  updateScoreForm !: FormGroup;
  submmited : boolean = false


  constructor(private materDetailService : MaterDetailService,
    private router : Router, 
    private toastr : ToastrService,
    private fb : FormBuilder) {
    const state = this.router.getCurrentNavigation()?.extras.state;
      this.masterDetailId = state?.['scoreCoucli'];
  }

  ngOnInit(): void {
    this.getMaterDetail();
    this.updateScoreForm = this.fb.group({
      score : new FormControl("", Validators.required),
      masterDetailId : this.masterDetailId
    })
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
      this.materDetailService.updateScoreCouncli(this.updateScoreForm.value).pipe(
        catchError(er => {
          this.toastr.error("Update điểm thất bại")
          throw new Error("Update điểm thất bại")
        })
      ).subscribe(data => {
        this.toastr.success("Update điểm thành công")
        this.router.navigateByUrl("home/page")
        window.location.reload()
      })
    }
  }
}
