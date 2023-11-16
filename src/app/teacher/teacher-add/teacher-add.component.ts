import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';
import { Role } from 'src/app/models/Role';
import { Subject } from 'src/app/models/Subject';
import { RoleService } from 'src/app/services/role.service';
import { SubjectService } from 'src/app/services/subject.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {
  roles : Role[] = [];
  addTeacherForm !: FormGroup;
  addAccount !: FormGroup;
  submited: boolean=false;
  user !: any
  subjects :Subject[] = [];
  username !: String

  constructor(private roleService : RoleService,
    private userService : UserService,
    private toastr : ToastrService,
    private http : HttpClient, 
    private subjectService : SubjectService,
    private router : Router){

  }

    ngOnInit(): void {
      this.getSubjects();
      this.getRoles();
      this.addAccount = new FormGroup({
        username : new FormControl("",Validators.required),
        password : new FormControl("", Validators.required),
        name : new FormControl("", Validators.required)
      })
      this.addTeacherForm = new FormGroup({
        teacherName : new FormControl("", Validators.required),
        email : new FormControl("", Validators.required),
        phone : new FormControl("", Validators.required),
        subjectId : new FormControl("", Validators.required),
        researchDirection : new FormControl("", Validators.required)
      })
      
    }

  getSubjects(){
    this.subjectService.getSubject().subscribe((data) => {
      console.log(data, "subject")
      this.subjects = data
    })
}
  addAcounts(addAccount : FormGroup){
    this.submited = true;
    console.log(addAccount, "add sv")
    if(this.addAccount.valid){
      this.userService.register(this.addAccount.value).pipe(
        catchError(() => {
          this.toastr.error("Thêm mới tài khoản thất bại!")
          throw new Error("Thêm mới tài khoản thất bại!")
        })
      ).subscribe(sv => {
        this.username = this.addAccount.value.username
        console.log(this.username, "username");
        
        // this.getUser(this.addAccount.value.username)
        this.toastr.success("Thêm mới tài khoản thành công!")

      })
    }
  }


  addTeacher(addTeacherForm : any){
    this.submited = true;
    console.log(addTeacherForm, "add sv")
    const userId = this.user.userId
    const url = 'http://localhost:9090/teacher'+"/"
    return this.http.post(url, this.addTeacherForm.value).pipe(
      catchError(() => {
        this.toastr.error("Thêm mới thông tin thất bại!")
        throw new Error("Thêm mới thông tin thất bại !")
      })
    ).subscribe( sv => {
      this.toastr.success("Thêm mới thông tin thành công")
      this.router.navigateByUrl("teacher/list");
    }
    );
  }
  getRoles(){
    this.roleService.getRole().subscribe((data) => {
      console.log(data, "list role");
      this.roles = data;
    })
  }
  getUser(username : any){
    this.userService.getUser(username).subscribe((username) => {
      console.log(username, "user");
      this.user = username;
    })
  }

}
