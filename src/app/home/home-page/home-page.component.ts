import { Component, OnInit } from '@angular/core';
import { GetSV } from 'src/app/models/GetSV';
import { MaterDetailService } from 'src/app/services/mater-detail.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  listSV = {}
  masterDetails :any= []
  getUser : any

  constructor(private masterDetailService : MaterDetailService, private userService : UserService, private teacherService : TeacherService){}
  ngOnInit(): void {
    this.ListSV()
    let username = sessionStorage.getItem("username");
    this.userService.getUser(username).subscribe((data) => {
      console.log(data, "get user");
      this.getUser = data
    })

   
    // sessionStorage.setItem("username")
  }
  ListSV(){
      this.masterDetailService.listMasterDetailSV().subscribe(data => {
        this.masterDetails = data.masterDetails;
        console.log(this.masterDetails, "listSV");
      })
  }

}
