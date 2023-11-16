import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CouncliService } from 'src/app/services/councli.service';

@Component({
  selector: 'app-councli-list',
  templateUrl: './councli-list.component.html',
  styleUrls: ['./councli-list.component.css']
})
export class CouncliListComponent implements OnInit{
  counclis !: any

  constructor(private router : Router,
    private councliService : CouncliService
     ){}

  ngOnInit(): void {
    this.getCounclis();
  }

  getCounclis(){
      this.councliService.getCouncli().subscribe((data) => {
        console.log(data, "list councli");
        
        this.counclis = data
      })
  }

}
