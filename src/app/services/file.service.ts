import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders()
};


@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http : HttpClient) { }

  getAllFile(){
     const getUrl = "http://localhost:8085/QLCSVC/api/file/files" 
     return this.http.get<any>(getUrl)
  }
  getFile(filename : any){
    const getUrl = "http://localhost:8085/QLCSVC/api/file" + "/" + filename 
    return this.http.get<any>(getUrl)
  }
  url="http://localhost:8085/QLCSVC/api/file/upload"

  public upload(file:any):Observable<any>{
    const formData = new FormData();
    formData.append("file", file)
    console.log("formData: ",formData);
    
    return this.http.post(this.url, formData, {
      reportProgress: true,
      responseType: 'json'
    });
  }
}
