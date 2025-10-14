import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrationsuccess',
  imports: [],
  templateUrl: './registrationsuccess.html',
  styleUrl: './registrationsuccess.css',
})
export class Registrationsuccess implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 7000);
  }
}
