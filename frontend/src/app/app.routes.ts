import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Addchapter } from './components/addchapter/addchapter';
import { Addcourse } from './components/addcourse/addcourse';
import { Addprofessor } from './components/addprofessor/addprofessor';
import { Admindashboard } from './components/admindashboard/admindashboard';
import { Approvalstatus } from './components/approvalstatus/approvalstatus';
import { Courselist} from './components/courselist/courselist';
import { Fullcourse } from './components/fullcourse/fullcourse';
import { Login} from './components/login/login';
import { Mycourses } from './components/mycourses/mycourses';
import { Mywishlist } from './components/mywishlist/Mywishlist';
import { Professordashboard } from './components/professordashboard/Professordashboard';
import { Professorlist } from './components/professorlist/professorlist';
import { Professorprofile } from './components/professorprofile/professorprofile';
import { Registration } from './components/registration/registration';
import { Registrationsuccess} from './components/registrationsuccess/Registrationsuccess';
import { Userdashboard } from './components/userdashboard/userdashboard';
import { Userlist } from './components/userlist/userlist.';
import { Userprofile } from './components/userprofile/userprofile.';
import { Welcomepage } from './components/welcomepage/Welcomepage';
import { AdminGuard } from './guards/admin.guard';
import { ProfessorGuard } from './guards/professor.guard';
import { RouterGuard } from './guards/router.guard';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {path:'',component:Welcomepage},
  {path:'login',component:Login},
  {path:'registration',component:Registration},
  {path:'registrationsuccess',component:Registrationsuccess},
  {path:'admindashboard',component:Admindashboard,canActivate:[AdminGuard]},
  {path:'userdashboard',component:Userdashboard,canActivate:[UserGuard]},
  {path:'professordashboard',component:Professordashboard,canActivate:[ProfessorGuard]},
  {path:'addProfessor',component:Addprofessor,canActivate:[AdminGuard]},
  {path:'addCourse',component:Addcourse,canActivate:[RouterGuard]},
  {path:'approveprofessor',component:Approvalstatus,canActivate:[RouterGuard]},
  {path:'professorlist',component:Professorlist,canActivate:[RouterGuard]},
  {path:'userlist',component:Userlist,canActivate:[RouterGuard]},
  {path:'courselist',component:Courselist,canActivate:[RouterGuard]},
  {path:'addchapter',component:Addchapter,canActivate:[RouterGuard]},
  {path:'fullcourse/:coursename',component:Fullcourse,canActivate:[RouterGuard]},
  {path:'editprofessorprofile',component:Professorprofile,canActivate:[ProfessorGuard]},
  {path:'edituserprofile',component:Userprofile,canActivate:[UserGuard]},
  {path:'mywishlist',component:Mywishlist,canActivate:[RouterGuard]},
  {path:'mycourses',component:Mycourses,canActivate:[RouterGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
