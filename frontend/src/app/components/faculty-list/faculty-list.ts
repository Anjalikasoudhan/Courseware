import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from 'src/app/models/professor';
import { ProfessorService } from 'src/app/services/professor.service';
@Component({
  selector: 'app-faculty-list',
  imports: [],
  templateUrl: './faculty-list.html',
  styleUrl: './faculty-list.css'
})
export class FacultyList {

  implements OnInit {

  loggedUser = '';
  currRole = '';
  professorlist : Observable<Professor[]> | undefined;
  
  constructor(private _service : ProfessorService) { }

  ngOnInit(): void 
  {
    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE')|| '{}'); 
    this.currRole = this.currRole.replace(/"/g, '');

    this.professorlist = this._service.getProfessorList()
  }
}
