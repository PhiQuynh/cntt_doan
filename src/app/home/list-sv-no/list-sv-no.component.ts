import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/Teacher';
import { MaterDetailService } from 'src/app/services/mater-detail.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-list-sv-no',
  templateUrl: './list-sv-no.component.html',
  styleUrls: ['./list-sv-no.component.css']
})
export class ListSvNoComponent implements OnInit {

  
  listSV = {}
  masterDetails :any= []

  constructor(private masterDetailService : MaterDetailService, 
    private router : Router
    ){}
  ngOnInit(): void {
    this.ListSV()
  }
  clickEdit(teacherId : number){
    this.router.navigate(['teacher/edit'], {
      state: { teacherId: teacherId },
    })
  }

  ListSV(){
      this.masterDetailService.listMasterDetailSV().subscribe(data => {
        this.masterDetails = data.masterDetails;
        console.log(this.masterDetails, "listSV");
      })
  }

  

}