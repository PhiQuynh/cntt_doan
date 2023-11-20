import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherStudentService {

  constructor(private http : HttpClient) { }

  public getSV_accept(teacherId : any){
    const getUrl = "http://localhost:8085/teacherStudent/teacher_accept" + "/" +teacherId
    return this.http.get<any>(getUrl);
  }

  public getSV_invite(teacherId : any){
    const getUrl = "http://localhost:8085/teacherStudent" + "/" +teacherId
    return this.http.get<any>(getUrl);
  }
  public acceptStudent(id: any){
    const getUrl = "http://localhost:8085/teacherStudent/accept" + "/" +id
    return this.http.put(getUrl,id)
  }

  public not_acceptStudent(id: any){
    const getUrl = "http://localhost:8085/teacherStudent/not_accept" + "/" +id
    return this.http.put(getUrl,id)
  }
}
