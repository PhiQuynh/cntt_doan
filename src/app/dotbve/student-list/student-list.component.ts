import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Maters } from 'src/app/models/Maters';
import { MaterDetailService } from 'src/app/services/mater-detail.service';
import { MaterService } from 'src/app/services/mater.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{

  masterId: any = 1
  listSv : any
  master : Maters[] = []

  constructor(private masterDetailService : MaterDetailService,
    private masterService : MaterService,
    private router : Router){}
  ngOnInit(): void {
    this.masterService.getMaterAll().subscribe((data) => {
      this.master = data
    })
  }
}
