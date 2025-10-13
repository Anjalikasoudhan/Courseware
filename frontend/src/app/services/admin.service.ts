import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Professor } from '../models/professor';

const NAV_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  professor = new Professor();

  
  constructor(private _http: HttpClient) {}

  public addProfessor(professor: Professor): Observable<any> {
    return this._http.post<any>(`${NAV_URL}/addProfessor`, professor);
  }

  // NOTE: HttpClient.post requires a body argument. If your backend expects no body,
  // pass an empty object {}. If the endpoint should be GET, change to get().
  getTotalProfessors(): Observable<any> {
    return this._http.post<any>(`${NAV_URL}/getTotalProfessors`, {});
  }

  getTotalUsers(): Observable<any> {
    return this._http.post<any>(`${NAV_URL}/gettotalusers`, {});
  }

  getTotalCourses(): Observable<any> {
    return this._http.post<any>(`${NAV_URL}/gettotalcourses`, {});
  }

  getTotalWishlist(): Observable<any> {
    return this._http.post<any>(`${NAV_URL}/gettotalwishlist`, {});
  }

  getTotalEnrollments(): Observable<any> {
    return this._http.post<any>(`${NAV_URL}/gettotalenrollments`, {});
  }

  getTotalEnrollmentCount(): Observable<any> {
    return this._http.post<any>(`${NAV_URL}/gettotalenrollmentcount`, {});
  }

  getTotalChapters(): Observable<any> {
    return this._http.post<any>(`${NAV_URL}/gettotalchapters`, {});
  }
}
