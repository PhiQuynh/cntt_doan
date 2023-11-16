import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-teacher-edit-account',
  templateUrl: './teacher-edit-account.component.html',
  styleUrls: ['./teacher-edit-account.component.css']
})
export class TeacherEditAccountComponent implements OnInit {


  updateAccountForm !: FormGroup;
  submited : boolean = false;
  
  constructor(private fb : FormBuilder,
    private userService : UserService,
     private toastr:ToastrService,
     private router : Router){
  }

  ngOnInit(): void {
    
    this.updateAccountForm = this.fb.group({
      username: new FormControl("", Validators.required),
      password : new FormControl("", Validators.required),
    })

  }

  UpdateAccount(updateAccountForm : FormGroup){
      this.submited = true;
      console.log(updateAccountForm, "add sv")
      if(this.updateAccountForm.valid){
        this.userService.updateAccount(this.updateAccountForm.value).pipe(
          catchError(() => {
            this.toastr.error("Cập nhập tài khoản thất bại!")
            throw new Error("Cập nhập tài khoản thất bại!")
          })
        ).subscribe(sv => {
          this.toastr.success("Cập nhập tài khoản thành công!")
          this.router.navigateByUrl("home/page")
          window.location.reload()
        })
      }
    }

    onClick(){
      this.router.navigateByUrl("home/page")
    }

}

