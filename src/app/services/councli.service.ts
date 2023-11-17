import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CouncliService {

  constructor(private http : HttpClient) { }

  private handleError (error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error(error.error.message)
    } else {
      console.error(
       `${error.status} ` + `${error.error}` 
      )
    }
    return throwError('Something went wrong');
  };

  url = "http://localhost:8085/coucil"

  getCouncli(){
    const getUrl = "http://localhost:8085/coucil/getAll"
    return this.http.get(getUrl, httpOptions);
  }

  public addCouncli(form : FormGroup){
    
    return this.http.post(this.url, form, httpOptions)
  }

  getCouncliByTeacher(teacherId : any){
    const getUrl = "http://localhost:8085/teachercoucil/teacher" + "/" +teacherId
    return this.http.get(getUrl, teacherId)
  }
}
