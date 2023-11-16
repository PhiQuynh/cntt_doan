import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { User } from '../models/User';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  User !:BehaviorSubject<any>;
  User$:Observable<any>;
  
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

  constructor(private http:HttpClient) { 
    this.User= new BehaviorSubject<any>(sessionStorage.getItem("access_token"));
    this.User$=this.User?.asObservable();
  }

  register(form : any){
    const url = 'http://localhost:9090/user/register'
    return this.http.post<any>(url, form, httpOptions).pipe(catchError(this.handleError))
  }

  getUser(username : any){
    const url = 'http://localhost:9090/user/'+username
    return this.http.get<any>(url,username);
  }

  updateAccount(form : any){
    const url = 'http://localhost:9090/user'
    return this.http.put(url, form, httpOptions).pipe(catchError(this.handleError));
  }
}
