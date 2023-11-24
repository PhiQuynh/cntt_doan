import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Maters } from 'src/app/models/Maters';
import { MaterService } from 'src/app/services/mater.service';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.css']
})
export class MasterListComponent implements OnInit {
  masters : Maters[] = [];
  constructor(private materService : MaterService,
      private router : Router){
  }
  ngOnInit(): void {
    this.getAllMaster();
  }
  getAllMaster(){
    this.materService.getMaterAll().subscribe((data) => {
      console.log(data, "master list");
      this.masters = data
    })
  }
  goToMasterEdit(masterId : number){
    this.router.navigate(["master/edit"], {
      state : {masterId : masterId}
    })
  }

}
