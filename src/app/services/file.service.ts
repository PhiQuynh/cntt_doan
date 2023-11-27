import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
}
@Injectable({
  providedIn: 'root'
})
export class FileService {


  private baseUrl = 'http://localhost:8085/file';
	
  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();
  formData.append('file', file);
  const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
    reportProgress: true,
    responseType: 'json' // Kiểu phản hồi có thể là 'blob' hoặc 'text' tuỳ thuộc vào yêu cầu của bạn
  })
  return this.http.request(req);
  }

  getFiles(): Observable<any> {
  return this.http.get(`${this.baseUrl}/files`);
  }
}
