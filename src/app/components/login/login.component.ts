import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/app-constants';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signinForm!: FormGroup;
  submitted: boolean = false;
  constructor(
    private router: Router,
    public http: HttpClient,
    public toastr: ToastrService
  ) {}

  isValid = true;

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  public login(signinForm: FormGroup) {
    console.log(signinForm, 'signForm');
    let user = signinForm.value;
    if (this.signinForm.valid) {
      this.http
        .post(AppConstants.BASE_URL_API + '/user/login', this.signinForm.value)
        .subscribe({
          next: (body: any) => {
            if (body && body?.accessToken && body?.tokenType) {
              window.location.reload();
              sessionStorage.setItem('access_token', body?.accessToken);
              sessionStorage.setItem('token_type', body?.tokenType);
              sessionStorage.setItem(
                'username',
                this.signinForm.value?.username
              );
              
              this.router.navigate(['/home/page']);
              
            } else {
              this.isValid = false;
            }
            this.toastr.success('Đăng nhập thành công');
          },
          error: (error) => {
            this.router.navigate(['not_found'], {
              state: { message: 'Đã xảy ra lỗi hệ thống' },
            });
            console.log(error);
            this.toastr.error('Đã xảy ra lỗi hệ thống');
          },
        });
    } else {
      this.isValid = false;
    }
  }
}
