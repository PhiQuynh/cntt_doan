import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CouncliService } from 'src/app/services/councli.service';

@Component({
  selector: 'app-councli-list-teacher',
  templateUrl: './councli-list-teacher.component.html',
  styleUrls: ['./councli-list-teacher.component.css']
})
export class CouncliListTeacherComponent implements OnInit{

  teacherCouncli : any
  counclis !: any
  coucilId !: any
  constructor(private router : Router,
    private councliService : CouncliService
     ){}

  ngOnInit(): void {
    this.getCounclis();
    this.getTeacherCouncli();
  }

  getCounclis(){
      this.councliService.getCouncli().subscribe((data) => {
        console.log(data, "list councli");
        
        this.counclis = data
      })
  }

  getTeacherCouncli(councliId = 1){
      this.councliService.getCouncliByTeacher(councliId).subscribe((data) => {
        console.log(data, "teacherCouncli");
        this.teacherCouncli = data
      })
  }

  getTeacherCounclis(){
    this.councliService.getCouncliByTeacher(this.coucilId).subscribe((data) => {
      console.log(data, "teacherCouncli list sjdhsdff");
      this.teacherCouncli = data
    })
}

onSelectChange(event: Event) {
  const selectedValue = (event.target as HTMLSelectElement).value;
  this.coucilId =
    selectedValue !== 'null' ? parseInt(selectedValue, 10) : null;
}


}
