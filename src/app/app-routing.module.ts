import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeListComponent } from './home/home-list/home-list.component';
import {AuthorizeGuard } from './guards/login.guard';
import { AddSvComponent } from './home/add-sv/add-sv.component';
import { EditSvComponent } from './home/edit-sv/edit-sv.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherAddComponent } from './teacher/teacher-add/teacher-add.component';
import { SvExcelComponent } from './home/sv-excel/sv-excel.component';
import { MasterListComponent } from './dotbve/master-list/master-list.component';
import { MaterAddComponent } from './dotbve/mater-add/mater-add.component';
import { StudentListComponent } from './dotbve/student-list/student-list.component';
import { TeacherEditComponent } from './teacher/teacher-edit/teacher-edit.component';
import { MasterEditComponent } from './dotbve/master-edit/master-edit.component';
import { CouncliListComponent } from './councli/councli-list/councli-list.component';
import { TeacherListSvComponent } from './home/teacher-list-sv/teacher-list-sv.component';
import { ListSvNoComponent } from './home/list-sv-no/list-sv-no.component';
import { TeacherEditAccountComponent } from './teacher/teacher-edit-account/teacher-edit-account.component';
import { CouncliAddComponent } from './councli/councli-add/councli-add.component';
import { TeacherCouncliComponent } from './councli/teacher-councli/teacher-councli.component';
import { ScoreArgumentComponent } from './score/score-argument/score-argument.component';
import { ScoreCouncliComponent } from './score/score-councli/score-councli.component';
import { UpdateTeacherhdComponent } from './score/update-teacherhd/update-teacherhd.component';
import { UpdateTeacherpbComponent } from './score/update-teacherpb/update-teacherpb.component';
import { UpdateTitleComponent } from './score/update-title/update-title.component';
import { TeacherListSvInviteComponent } from './teacher/teacher-list-sv-invite/teacher-list-sv-invite.component';
import { UpdateCouncliComponent } from './score/update-councli/update-councli.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: "home/page", component: HomePageComponent},
  {path: 'home/list/sv', component : HomeListComponent,canActivate : [AuthorizeGuard] },
  {path: 'add/sv', component : AddSvComponent, canActivate : [AuthorizeGuard]},
  {path: 'edit/sv', component : EditSvComponent, canActivate : [AuthorizeGuard]},
  {path: 'teacher/list', component : TeacherListComponent, canActivate:[AuthorizeGuard]},
  {path: 'teacher/add', component : TeacherAddComponent, canActivate:[AuthorizeGuard]},
  {path: 'teacher/edit', component : TeacherEditComponent, canActivate:[AuthorizeGuard]},
  {path: 'list/sv/excel', component : SvExcelComponent, canActivate:[AuthorizeGuard]},
  {path: 'master/list', component : MasterListComponent, canActivate:[AuthorizeGuard]},
  {path: 'master/add', component : MaterAddComponent, canActivate:[AuthorizeGuard]},
  {path: 'master/list/sv', component : StudentListComponent, canActivate:[AuthorizeGuard]},
  {path: 'master/edit', component : MasterEditComponent, canActivate:[AuthorizeGuard]},
  {path: "councli/list", component : CouncliListComponent, canActivate:[AuthorizeGuard]},
  {path: "teacher/list/sv", component : TeacherListSvComponent, canActivate:[AuthorizeGuard]},
  {path: "list/sv/no", component : ListSvNoComponent, canActivate:[AuthorizeGuard]},
  {path: "teacher/edit/account", component : TeacherEditAccountComponent, canActivate:[AuthorizeGuard]},
  {path: "councli/add", component : CouncliAddComponent, canActivate:[AuthorizeGuard]},
  {path: "teacher/councli", component : TeacherCouncliComponent, canActivate:[AuthorizeGuard]},
  {path: "sv/update/score/argument", component : ScoreArgumentComponent, canActivate:[AuthorizeGuard]},
  {path: "sv/update/score/councli", component : ScoreCouncliComponent, canActivate:[AuthorizeGuard]},
  {path: "sv/update/score/teacherHD", component : UpdateTeacherhdComponent, canActivate:[AuthorizeGuard]},
  {path: "sv/update/score/teacherPB", component : UpdateTeacherpbComponent, canActivate:[AuthorizeGuard]},
  {path: "sv/update/score/title", component : UpdateTitleComponent, canActivate:[AuthorizeGuard]},
  {path: "sv/update/councli", component : UpdateCouncliComponent, canActivate:[AuthorizeGuard]},
  {path: "teacher/list/sv/invite", component : TeacherListSvInviteComponent, canActivate:[AuthorizeGuard]},
  {path: "not_found", component: NotFoundComponent,canActivate : [AuthorizeGuard] },
  // { path: '',   redirectTo: '/home', pathMatch: 'full'}
  
  // { path: '',   redirectTo: '/home/page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
