import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  getUrl = "http://localhost:8085/role"

  constructor(private http : HttpClient) { }

  getRole(){
    return this.http.get<any>(`${this.getUrl}`)
  }
}
