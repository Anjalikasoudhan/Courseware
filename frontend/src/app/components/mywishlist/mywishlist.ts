import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Wishlist } from 'src/app/models/wishlist';
import { UserService } from 'src/app/services/user.service';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-mywishlist',
  imports: [FormsModule, CommonModule, RouterModule, Header, Footer],
  templateUrl: './mywishlist.html',
  styleUrls: ['./mywishlist.css'],
})
export class Mywishlist implements OnInit {
  wishlist: Observable<Wishlist[]> | undefined;
  loggedUser = '';
  currRole = '';
  constructor(private _service: UserService, private _router: Router) {}

  ngOnInit(): void {
    this.loggedUser = JSON.stringify(
      sessionStorage.getItem('loggedUser') || '{}'
    );
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE') || '{}');
    this.currRole = this.currRole.replace(/"/g, '');

    if (this.currRole === 'admin')
      this.wishlist = this._service.getAllWishlist();
    else this.wishlist = this._service.getWishlistByEmail(this.loggedUser);
  }

  visitCourse(coursename: string) {
    this._router.navigate(['/fullcourse', coursename]);
  }

  openURL(url: string) {
    (window as any).open(url, '_blank');
  }
}
