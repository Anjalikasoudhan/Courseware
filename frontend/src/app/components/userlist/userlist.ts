import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-userlist',
  imports: [Footer, Header,FormsModule,CommonModule],
  templateUrl: './userlist.html',
  styleUrls: ['./userlist.css'],
})
export class Userlist implements OnInit {
  users: Observable<User[]> | undefined;

  constructor(private _serive: UserService) {}

  ngOnInit(): void {
    this.users = this._serive.getAllUsers();
  }
}

