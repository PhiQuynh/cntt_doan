import { HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError, Observable} from 'rxjs';
import { GetSV } from '../models/GetSV';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class MaterDetailService {

  geturl = 'http://localhost:8085/masterdetail';
  private REST_API_MATERDETAILS = "http://localhost:8085/masterdetail/getById"

  constructor(
    private http : HttpClient
  ) { }

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

  public getListSV(){
    return this.http.get<any>(`${this.geturl}`)
  }

  public addSV(data : any){
    const url = 'http://localhost:8085/masterdetail'
    return this.http.post<any>(url, data, httpOptions).pipe(catchError(this.handleError))
  }

  public getSVById(masterDetailId : number){
    const url = this.REST_API_MATERDETAILS + "/" + masterDetailId;
    return this.http.get<any>(url, httpOptions);
  }

  public listMasterDetailSV(){
    const getSV = "http://localhost:8085/masterdetail/sv<5"
    return this.http.get<any>(getSV);
  }

  public teacherListSVHD(id: any){
    const getSV = "http://localhost:8085/masterdetail/list/SV"+"/"+ id
    return this.http.get(getSV, id);
  }

  public deleteMasterDetals(id: any){
    const getUrl = "http://localhost:8085/masterdetail" + "/" + id
    return this.http.delete(getUrl, id)
  }

  public updateTeacherPB(form : any){
    const getUrl = "http://localhost:8085/masterdetail/edit_gvpb";
    return this.http.put(getUrl, form)
  }
  public updateTeacherHD(form : any){
    const getUrl = "http://localhost:8085/masterdetail/edit_gvhd";
    return this.http.put(getUrl, form)
  }
  public updateTitle(form : any){
    const getUrl = "http://localhost:8085/masterdetail/edit_title";
    return this.http.put(getUrl, form)
  }
  public updateScoreCouncli(form : any){
    const getUrl = "http://localhost:8085/masterdetail/edit_score_coucil";
    return this.http.put(getUrl, form)
  }
  public updateScoreArgument(form : any){
    const getUrl = "http://localhost:8085/masterdetail/edit_score_argument";
    return this.http.put(getUrl, form)
  }

  public updateCouncli( form : any){
    const getUrl = "http://localhost:8085/masterdetail/councli" 
    return this.http.put(getUrl,form)
  }
  public listSVPB(teacherPBId : any){
    const getUrl = "http://localhost:8085/masterdetail/gvpb"  +"/"+ teacherPBId
    return this.http.get<any>(getUrl,teacherPBId)
  }

  public countMasterDetail(){
    const getUrl = "http://localhost:8085/masterdetail/count"
    return this.http.get(getUrl)
  }

  public countMasterDetailByTeacherHd(teacherHD : any){
    const getUrl = "http://localhost:8085/masterdetail/count/teacherHD/" + teacherHD
    return this.http.get(getUrl)
  }

  public countMasterDetailByTeacherPB(teacherPB : any){
    const getUrl = "http://localhost:8085/masterdetail/count/teacherPB/" + teacherPB
    return this.http.get(getUrl)
  }

  public countSVLessThan(){
    const getUrl = "http://localhost:8085/masterdetail/count/SV/less"
    return this.http.get(getUrl)
  }

  public countSVMoreThan(){
    const getUrl = "http://localhost:8085/masterdetail/count/SV/success"
    return this.http.get(getUrl)
  }

  public getSVByMaster(masterId : any){
    const getUrl = "http://localhost:8085/masterdetail/master/" + masterId
    return this.http.get(getUrl, masterId)
  }

  // public uploadImage(file:File, masterDetailId : number){
  //   const url = this.REST_API_MATERDETAILS + "/" + masterDetailId;
  //   const formData : FormData = new FormData();
  //   formData.append('file', file)
  //   const req = new HttpRequest('POST', url, formData, {
  //     reportProgress: true,
  //     responseType: 'json'
  //   })
  //   return this.http.request(req);
  // }

}
