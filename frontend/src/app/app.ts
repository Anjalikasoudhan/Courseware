import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app';
import { Login } from './components/login/login';
import { Registration} from './components/registration/registration';
import { Registrationsuccess } from './components/registrationsuccess/registrationsuccess';
import { Userdashboard} from './components/userdashboard/userdashboard';
import { Professordashboard} from './components/professordashboard/professordashboard';
import { Admindashboard} from './components/admindashboard/admindashboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Header } from './components/header/header';
import { Footer} from './components/footer/footer';
import { Userprofile } from './components/userprofile/userprofile';
import { Professorprofile } from './components/professorprofile/professorprofile';
import { Addprofessor } from './components/addprofessor/addprofessor';
import { Approvalstatus } from './components/approvalstatus/approvalstatus';
import { Addcourse } from './components/addcourse/addcourse';
import { Userlist } from './components/userlist/userlist';
import { Professorlist } from './components/professorlist/professorlist';
import { Courselist} from './components/courselist/courselist';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { Fullcourse } from './components/fullcourse/fullcourse';
import { Addchapter } from './components/addchapter/addchapter';
import { Mycourses } from './components/mycourses/mycourses';
import { Mywishlist } from './components/mywishlist/mywishlist';
import { Welcomepage } from './components/welcomepage/welcomepage';


@NgModule({
  declarations: [
    App,
    Login,
    Registration,
    Registrationsuccess,
    Userdashboard,
    Professordashboard,
    Admindashboard,
    Header,
    Footer,
    Userprofile,
    Professorprofile,
    Addprofessor,
    Approvalstatus,
    Addcourse,
    Userlist,
    Professorlist,
    Courselist,
    Fullcourse,
    Addchapter,
    Mycourses,
    Mywishlist,
    Welcomepage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CarouselModule,
    YouTubePlayerModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [App, Registration]
})
export class AppModule { }
