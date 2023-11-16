import { User } from "./User";

export interface Teacher{
    teacherId : number,
    teacherName : String,
    email : String,
    phone : String,
    researchDirection : String,
    user : User[]
}