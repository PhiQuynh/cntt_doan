import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MasterDetails } from 'src/app/models/MasterDetails';
import { Maters } from 'src/app/models/Maters';
import { Student } from 'src/app/models/Student';
import { MaterDetailService } from 'src/app/services/mater-detail.service';
import { MaterService } from 'src/app/services/mater.service';

@Component({
  selector: 'app-teacher-list-sv-pb',
  templateUrl: './teacher-list-sv-pb.component.html',
  styleUrls: ['./teacher-list-sv-pb.component.css']
})
export class TeacherListSvPbComponent {
  students : MasterDetails[]= []
  maters : Maters[] = [];
  year: number = 2023;
  studentName : String = "";
  masterId ?: any;
  student : any

  constructor(private router : Router,
     private materDetailService : MaterDetailService){}

  ngOnInit(){
    let teacherId = sessionStorage.getItem('teacherId');
      this.materDetailService.listSVPB(teacherId).subscribe((data) => {
        console.log(data, "list sv")
        this.student = data
      })
  }

  clickGoTo(){
    this.router.navigateByUrl("/add/sv")
  }

  goToDetail(masterDetailId: number) {
    this.router.navigate(['edit/sv'], {
      state: { masterDetailId: masterDetailId },
    });
  }
  goToUpdateScoreAcument(scoreArgument: number) {
    this.router.navigate(['sv/update/score/argument'], {
      state: { scoreArgument: scoreArgument },
    });
  }
  goToUpdateScoreCouncli(scoreCoucli: number) {
    this.router.navigate(['sv/update/score/councli'], {
      state: { scoreCoucli: scoreCoucli },
    });
  }
  gotToUpdateTeacherPB(teacherPB: number) {
    this.router.navigate(['sv/update/score/teacherPB'], {
      state: { teacherPB: teacherPB },
    });
  }
  gotToUpdateTeacherHD(teacherHD: number) {
    this.router.navigate(['sv/update/score/teacherHD'], {
      state: { teacherHD: teacherHD },
    });
  }
  goToTitle(title: number) {
    this.router.navigate(['sv/update/score/title'], {
      state: { title: title },
    });
  }

  onSelectChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.masterId =
      selectedValue !== 'null' ? parseInt(selectedValue, 10) : null;
  }

  search(studentSearch: any): void{
    this.studentName = studentSearch;
    
  }
}
