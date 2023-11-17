import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Teacher } from '../models/Teacher';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

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

  constructor(private http : HttpClient) { }

  public getTeacher(): Observable<Teacher[]>{
    const url = 'http://localhost:8085/teacher/getAll'
    return this.http.get<Teacher[]>(url,httpOptions )
  }

  public addTeacher(form : any, userId : number){
    const url = 'http://localhost:8085/teacher/'+ userId
    return this.http.post(url,form)
  }

  public getTeacherById(){
    const url = "http://localhost:8085/teacher/getTeacherById"
    return this.http.get<any>(url)
  }

  public updateTeacher(form : any, teacherId : any){
    const url = "http://localhost:8085/teacher" + "/" + teacherId
    return this.http.put(url, form, teacherId).pipe(catchError(this.handleError))
  }

  public deleteTeacher(teacherId : any){
    const getUrl = "http://localhost:8085/teacher" +"/" + teacherId
    return this.http.delete(getUrl, teacherId)
  }

}
