import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationInstance, PaginationService } from 'ngx-pagination';
import { Subscription } from 'rxjs';
import { AppConstants } from 'src/app/app-constants';
import { Maters } from 'src/app/models/Maters';
import { Student } from 'src/app/models/Student';
import { MaterDetailService } from 'src/app/services/mater-detail.service';
import { MaterService } from 'src/app/services/mater.service';
@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
  students : any
  maters : Maters[] = [];
  year: number = 2023;
  studentName : String = "";
  masterId ?: any;
  pagedStudents: any; // Dữ liệu sinh viên được phân trang
  totalItems: number = 0;
  paginationConfig: PaginationInstance = {
    id: 'DEFAULT_PAGINATION_ID',
    itemsPerPage: 3, // Thay đổi giá trị này thành số mục trên mỗi trang của bạn
    currentPage: 1,
    totalItems: 0 // Sẽ được cập nhật bên trong subscribe
  };

  constructor(private router : Router,
     private materDetailService : MaterDetailService,
     private materService : MaterService,
    private http : HttpClient, 
    private paginationService: PaginationService){
 
  }

  ngOnInit(): void{
    this.materDetailService.getListSV().subscribe((data) => {
      console.log(data, "list sv");
      this.students = data.masterDetails;
      this.totalItems = this.students.length;
      this.paginationConfig.totalItems = this.totalItems;
      this.updatePagedStudents();
    });
    this.paginationService.register(this.paginationConfig);
      
      this.getMaters(this.year);
  }
 
  getStudentCount(): number {
    return this.students.length;
    // return this.students ? this.students.length : 0;
  }

  onPageChange(pageNumber: number): void {
    this.paginationConfig.currentPage = pageNumber;
    this.updatePagedStudents();
  }

  getPageNumbers(): number[] {
    const totalPages = Math.ceil(this.totalItems / this.paginationConfig.itemsPerPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }

  updatePagedStudents() {
    // Cập nhật dữ liệu sinh viên theo trang hiện tại
    const startIndex = (this.paginationConfig.currentPage - 1) * this.paginationConfig.itemsPerPage;
    const endIndex = startIndex + this.paginationConfig.itemsPerPage;
    this.pagedStudents = this.students.slice(startIndex, endIndex);
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
  getMaters(year: number){
    this.materService.getMater(year).subscribe((data) => {
      console.log(data, "mater list");
      this.maters = data;
    })
  }

  onSelectChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.masterId =
      selectedValue !== 'null' ? parseInt(selectedValue, 10) : null;
  }
  

  search(){
    this.materDetailService.getSVByMaster(this.masterId).subscribe((data) => {
      console.log(data, "teacherCouncli list sjdhsdff");
    this.students = data; // Lưu trữ kết quả tìm kiếm
    this.totalItems = this.students.length; // Cập nhật tổng số sinh viên tìm kiếm
    this.paginationConfig.totalItems = this.totalItems; // Cập nhật tổng số mục trên phân trang
    this.paginationConfig.currentPage = 1; // Đặt trang hiện tại về 1 sau khi tìm kiếm
    this.updatePagedStudents();
    });
}
}
