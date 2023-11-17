import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Subject } from '../models/Subject';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http : HttpClient) { }

  public getSubject(): Observable<Subject[]>{
    const url = 'http://localhost:8085/subject'
    return this.http.get<Subject[]>(url,httpOptions )
  }
}
