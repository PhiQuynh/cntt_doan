import { Component, OnInit } from '@angular/core';
import { CouncliService } from 'src/app/services/councli.service';

@Component({
  selector: 'app-teacher-councli',
  templateUrl: './teacher-councli.component.html',
  styleUrls: ['./teacher-councli.component.css']
})
export class TeacherCouncliComponent implements OnInit{
  council : any
  constructor(private councliService : CouncliService){}
  ngOnInit(): void {

    const teacherId =  sessionStorage.getItem('teacherId');
    
    this.councliService.getTeacherByCouncli(teacherId).subscribe((data) => {
      console.log(data, "teacher councli");
      this.council = data
    })
  }

  

}
