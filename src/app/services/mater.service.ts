import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Maters } from '../models/Maters';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class MaterService {
  url = 'http://localhost:8085/master';

  constructor(private http : HttpClient) { }

   
  public getMater(year: any): Observable<Maters[]>{
   const getUrl = this.url + `?year=${year}`
    return this.http.get<Maters[]>(`${getUrl}`)
  }

  public getMaterAll() : Observable<Maters[]>{
    const getUrl =  'http://localhost:8085/master/getAll'
    return this.http.get<Maters[]>(getUrl, httpOptions)
  }

  public addMaster(form : any) {
    return this.http.post(this.url, form, httpOptions)
  }

  public updateMaster(id : number, form : any){
    const getUrl = this.url + "/" + id;
    return this.http.put(getUrl,id,form)
  }

  public deleteMaster(id : any){
    const getUrl ="http://localhost:8085/master" + "/" +id
    return this.http.delete(getUrl, id)
  }

  public countMaster(){
    const getUrl = "http://localhost:8085/master/count"
    return this.http.get(getUrl)
  }


}                                                                             
