import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Observable, catchError, throwError } from 'rxjs';
import { FileService } from 'src/app/services/file.service';
@Component({
  selector: 'app-sv-excel',
  templateUrl: './sv-excel.component.html',
  styleUrls: ['./sv-excel.component.css'],
})
export class SvExcelComponent implements OnInit {
[x: string]: any;
  filename: any;
  listFile: any;
  users: any;
  file!: File;
  fileObj !: File
  selectedFiles?: FileList;
		  currentFile?: File;
		  progress = 0;
		  message = '';
		
		  fileInfos?: Observable<any>;
  
  constructor(
    private fileService: FileService,
    private toastr: ToastrService,
    private http: HttpClient

  ) {}

  ngOnInit() {
    this.fileInfos = this.fileService.getFiles();
    }
  
    selectFile(event: any) {
    this.selectedFiles = event.target.files;
    }
  
    upload(): void {
    this.progress = 0;
    
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
    
      if (file) {
      this.currentFile = file;
    console.log( this.currentFile, "current file");
    
      this.fileService.upload(this.currentFile).subscribe(
        (event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.fileService.getFiles();
        }
        },
        (err: any) => {
        console.log(err);
        this.progress = 0;
    
        if (err.error && err.error.message) {
          this.message = err.error.message;
        } else {
          this.message = 'Could not upload the file!';
        }
    
        this.currentFile = undefined;
        });
      }
    
      this.selectedFiles = undefined;
    }
    }
  downloadFile(filename: any) {
    const fileUrl = 'http://localhost:8085/QLCSVC/api/file' + '/' + filename;

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
    console.log(this.file, "file");
    
  }

  private headers = new Headers({'Content-Type' : 'multipart/form-data'});
    
  sendFile(fileObj: File) {
    const formData: FormData = new FormData();
    formData.append('file', fileObj);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post('http://localhost:8085/QLCSVC/api/file/upload', formData, { headers: headers });
     
    // const req = new HttpRequest('POST', "http://localhost:8080/QLCSVC/api/file/upload", formData, {
    //   reportProgress: true,
    //   responseType: 'json',
    // });

    // return this.http.request(req);

  }
}
