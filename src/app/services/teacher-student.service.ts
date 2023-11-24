import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherStudentService {

  constructor(private http : HttpClient) { }

  public getSV_accept(teacherId : any){
    const getUrl = "http://localhost:8085/masterdetail/getSVbyTeacherHD" + "/" +teacherId
    return this.http.get<any>(getUrl);
  }

  public getSV_invite(teacherId : any){
    const getUrl = "http://localhost:8085/masterdetail/getSVInviteTeacher" + "/" +teacherId
    return this.http.get<any>(getUrl);
  }
  public acceptStudent(masterDetailId : any,teacherHDId : any ){
    const getUrl = "http://localhost:8085/masterdetail" + "/" +masterDetailId + "/accept/" +teacherHDId + "/status"
    return this.http.put(getUrl,masterDetailId, teacherHDId)
  }

  public not_acceptStudent(masterDetailId : any,teacherHDId : any){
    const getUrl = "http://localhost:8085/masterdetail" + "/" +masterDetailId + "/not_accept/" +teacherHDId + "/status"
    return this.http.put(getUrl,masterDetailId, teacherHDId)
  }
}
