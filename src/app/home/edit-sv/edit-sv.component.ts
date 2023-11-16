import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { MaterDetail } from 'src/app/models/MaterDetail';
import { Maters } from 'src/app/models/Maters';
import { Subject } from 'src/app/models/Subject';
import { Teacher } from 'src/app/models/Teacher';
import { MaterDetailService } from 'src/app/services/mater-detail.service';
import { MaterService } from 'src/app/services/mater.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-edit-sv',
  templateUrl: './edit-sv.component.html',
  styleUrls: ['./edit-sv.component.css']
})
export class EditSvComponent implements OnInit {

  editProfileSV !: FormGroup
  masterDetailId !: number;
  materDetail : any;
  image : any = "file/image/details/";
  a : any;
  file !: File;
  editForm !: FormGroup
  imageForm !: FormGroup;
  maters : Maters[] = [];
  teachers : Teacher[] = [];
  year : number = 2023;

  private REST_API_MATERDETAILS = 'http://localhost:9090/file/upload/detail'


  constructor(private materDetailService : MaterDetailService,
    private toastr : ToastrService,
    private formBuilder : FormBuilder,
    private materService : MaterService,
    private teacherService : TeacherService,
    private http : HttpClient,
    private router : Router){
      const state = this.router.getCurrentNavigation()?.extras.state;
      this.masterDetailId = state?.['masterDetailId'];
  this.a = state?.['masterDetailId'];
     }

  ngOnInit(): void {
    console.log(this.masterDetailId, "masterDetailId");
    this.imageForm = this.formBuilder.group({
      imageInput: ['']
    });
    this.getMaterDetail();
    this.image += this.a
    this.getMaters(this.year);
    this.getTeacher()

  }

  goToUpdateTeacherPB() {
    this.router.navigate(['sv/update/score/teacherPB'], {
      state: { teacherPB: this.masterDetailId },
    });
  }
  goToUpdateTeacherHD() {
    this.router.navigate(['sv/update/score/teacherHD'], {
      state: { teacherHD: this.masterDetailId },
    });
  }
  goToTitle() {
    this.router.navigate(['sv/update/score/title'], {
      state: { title: this.masterDetailId  },
    });
  }
  goToUpdateScoreAcument() {
    this.router.navigate(['sv/update/score/argument'], {
      state: { scoreArgument: this.masterDetailId  },
    });
  }
  goToUpdateScoreCouncli() {
    this.router.navigate(['sv/update/score/councli'], {
      state: { scoreCoucli: this.masterDetailId  },
    });
  }

    onClick(){
      this.router.navigateByUrl("home/list/sv")
    }

    getMaterDetail(){
      this.materDetailService.getSVById(this.masterDetailId).subscribe((data) => {
        console.log(data)
        this.materDetail = data
      })
    }
    onFileChange(file:any){
      this.file=file.files[0];
      // this.editForm.controls["image"].setValue(file.files[0].name);
  
    }

    getTeacher(){
      this.teacherService.getTeacher().subscribe((data) => {
        console.log(data, "teacher list")
        this.teachers = data
      })
    }

    getMaters(year: number){
      this.materService.getMater(year).subscribe((data) => {
        console.log(data, "mater list");
        this.maters = data;
      })
    }

    uploadImage() {
      const file: File = this.imageForm.get('imageInput')?.value;
      // const masterDetailId: number = 12345; // Thay thế bằng giá trị masterDetailId thực tế
      console.log(this.masterDetailId, "upload")
      const url = `${this.REST_API_MATERDETAILS}/${this.masterDetailId}`;
      const formData: FormData = new FormData();
      formData.append('file', file);
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data'); // Thêm tiêu đề Content-Type
      this.http.post(url, formData, {headers}).pipe(
        catchError(() => {
          this.toastr.error("Upload không thành công")
          throw new Error("Upload không thành công")
        })
      )
      .subscribe(
        response => {
          console.log('Upload thành công');
          this.toastr.success("Upload thành công")
        }
      );
    }
    // uploadImage(){
    //   // const file: File = imageInput.files[0];
    //   this.materDetailService.uploadImage(this.file, this.masterDetailId).pipe(
    //     catchError(() => {
    //       this.toastr.error("Upload ảnh không thành công")
    //       throw new Error("Thêm ảnh không thành công")
    //     })
    //   ).subscribe(data => {
    //     this.toastr.success("Upload ảnh thành công")
    //   })
    // }

}
