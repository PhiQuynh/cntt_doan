import { Maters } from "./Maters";
import { Teacher } from "./Teacher";

export interface MaterDetail{
      masterDetailId : number,
      studentName : String,
      mssv : number,
      studentClass : String,
      titleNameVn : String,
      titleNameEn : String,
      teacherHD :  String,
      teacherPB: String,
      masterName : String,
      startDate : String,
      endDate : String;
      maters : Maters[],
      teacherName : Teacher[]
}