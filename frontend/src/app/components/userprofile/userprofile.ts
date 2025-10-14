import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [Footer, Header,FormsModule,CommonModule],
  templateUrl: './userprofile.html',
  styleUrls: ['./userprofile.css']
})
export class Userprofile implements OnInit {
  profileDetails: Observable<User[]> | undefined;
  user: User = new User();
  msg = ' ';
  currRole = '';
  loggedUser = '';
  temp = false;

  constructor(
    private _service: UserService,
    private activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.loggedUser = JSON.stringify(
      sessionStorage.getItem('loggedUser') || '{}'
    );
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE') || '{}');
    this.currRole = this.currRole.replace(/"/g, '');

    $('#profilecard').show();
    $('#profileform').hide();
    this.getProfileDetails(this.loggedUser);
  }

  editProfile() {
    $('#profilecard').hide();
    $('#profileform').show();
  }

  getProfileDetails(loggedUser: string) {
    this.profileDetails = this._service.getProfileDetails(this.loggedUser);
    console.log(this.profileDetails);
  }

  updateUserProfile() {
    this._service.UpdateUserProfile(this.user).subscribe(
      (data) => {
        console.log('UserProfile Updated succesfully');
        this.msg = 'Profile Updated Successfully !!!';
        $('.editbtn').hide();
        $('#message').show();
        this.temp = true;
        $('#profilecard').show();
        $('#profileform').hide();
        setTimeout(() => {
          this._router.navigate(['/userdashboard']);
        }, 6000);
      },
      (error) => {
        console.log('Profile Updation Failed');
        console.log(error.error);
        this.msg = 'Profile Updation Failed !!!';
      }
    );
  }
}

