import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from 'src/app/models/professor';
import { ProfessorService } from 'src/app/services/professor.service';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-professorlist',
  imports: [Footer, Header,FormsModule,CommonModule,RouterModule],
  templateUrl: './professorlist.html',
  styleUrl: './professorlist.css'
})
export class Professorlist implements OnInit {
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

    this.professorlist = this._service.getProfessorList();
  }

}
