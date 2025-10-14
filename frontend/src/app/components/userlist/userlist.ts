import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-userlist',
  imports: [],
  templateUrl: './userlist.html',
  styleUrl: './userlist.css',
})
export class Userlist implements OnInit {
  users: Observable<User[]> | undefined;

  constructor(private _serive: UserService) {}

  ngOnInit(): void {
    this.users = this._serive.getAllUsers();
  }
}

