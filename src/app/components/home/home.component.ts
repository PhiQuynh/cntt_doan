import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { MaterDetailService } from 'src/app/services/mater-detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  students : Student[]= []

  constructor(private router : Router,
     private materDetailService : MaterDetailService,
    private http : HttpClient){

  }

  ngOnInit(){
      this.materDetailService.getListSV().subscribe((data) => {
        console.log(data, "list sv")
        this.students = data
      })
  }
}
