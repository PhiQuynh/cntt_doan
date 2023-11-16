import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { FileService } from 'src/app/services/file.service';
import * as xls from 'xlsx';

@Component({
  selector: 'app-sv-excel',
  templateUrl: './sv-excel.component.html',
  styleUrls: ['./sv-excel.component.css'],
})
export class SvExcelComponent implements OnInit {
  filename: any;
  listFile: any;
  users: any;
  file!: File;
  
  constructor(
    private fileService: FileService,
    private toastr: ToastrService,
    private http: HttpClient,
    // private client : HttpClientModule 
  ) {}

  ngOnInit(): void {
    this.getAllFile();
  }

  getAllFile() {
    this.fileService.getAllFile().subscribe((data) => {
      this.listFile = data;
    });
  }
  downloadFile(filename: any) {
    const fileUrl = 'http://localhost:9090/QLCSVC/api/file' + '/' + filename;

    this.http
      .get(fileUrl, { responseType: 'blob' })
      .pipe(
        catchError((data) => {
          this.toastr.error('Tải xuống file thất bại !');
          throw new Error('Tải xuống file thất bại !');
        })
      )
      .subscribe((response) => {
        const blob = new Blob([response], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
        this.toastr.success('Tải xuống file thành công');
      });
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    if (this.file) {
      const formData = new FormData();
  
      formData.append('file', this.file, this.file.name);
  
      const upload$ = this.http.post("http://localhost:9090/QLCSVC/api/file/upload", formData);
  
  
      upload$.subscribe({
        next: () => {
          this.toastr.success("Upload file thành công")
        },
        error: (error: any) => {
          return throwError(() => error);
        },
      });
    }
  }

  // addFile() {
  //   console.log(this.file, "file");
    
  //   this.fileService
  //     .upload(this.file)
  //     .pipe(
  //       catchError((file) => {
  //         this.toastr.error('Upload file thất bại');
  //         throw new Error('Upload file thất bại');
  //       })
  //     )
  //     .subscribe((data) => {
  //       this.toastr.success('Upload file thành công');
  //     });
  // }

 
}
