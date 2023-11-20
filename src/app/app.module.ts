import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeListComponent } from './home/home-list/home-list.component';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { AddSvComponent } from './home/add-sv/add-sv.component';
import { ToastrModule } from 'ngx-toastr';
import { EditSvComponent } from './home/edit-sv/edit-sv.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherAddComponent } from './teacher/teacher-add/teacher-add.component';
import { TeacherEditComponent } from './teacher/teacher-edit/teacher-edit.component';
import { SvExcelComponent } from './home/sv-excel/sv-excel.component';
import { MasterListComponent } from './dotbve/master-list/master-list.component';
import { MaterAddComponent } from './dotbve/mater-add/mater-add.component';
import { StudentListComponent } from './dotbve/student-list/student-list.component';
import { MasterEditComponent } from './dotbve/master-edit/master-edit.component';
import { CouncliListComponent } from './councli/councli-list/councli-list.component';
import { CouncliAddComponent } from './councli/councli-add/councli-add.component';
import { TeacherListSvComponent } from './home/teacher-list-sv/teacher-list-sv.component';
import { ListSvNoComponent } from './home/list-sv-no/list-sv-no.component';
import { TeacherEditAccountComponent } from './teacher/teacher-edit-account/teacher-edit-account.component';
import { ScoreArgumentComponent } from './score/score-argument/score-argument.component';
import { ScoreCouncliComponent } from './score/score-councli/score-councli.component';
import { TeacherCouncliComponent } from './councli/teacher-councli/teacher-councli.component';
import { UpdateTitleComponent } from './score/update-title/update-title.component';
import { UpdateTeacherpbComponent } from './score/update-teacherpb/update-teacherpb.component';
import { UpdateTeacherhdComponent } from './score/update-teacherhd/update-teacherhd.component';
import { TeacherListSvInviteComponent } from './teacher/teacher-list-sv-invite/teacher-list-sv-invite.component';
import { UpdateCouncliComponent } from './score/update-councli/update-councli.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    PaginatorComponent,
    HomePageComponent,
    NotFoundComponent,
    HomeListComponent,
    AddSvComponent,
    EditSvComponent,
    TeacherListComponent,
    TeacherAddComponent,
    TeacherEditComponent,
    SvExcelComponent,
    MasterListComponent,
    MaterAddComponent,
    StudentListComponent,
    MasterEditComponent,
    CouncliListComponent,
    CouncliAddComponent,
    TeacherListSvComponent,
    ListSvNoComponent,
    TeacherEditAccountComponent,
    ScoreArgumentComponent,
    ScoreCouncliComponent,
    TeacherCouncliComponent,
    UpdateTitleComponent,
    UpdateTeacherpbComponent,
    UpdateTeacherhdComponent,
    TeacherListSvInviteComponent,
    UpdateCouncliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(), 
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [
    TokenInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
