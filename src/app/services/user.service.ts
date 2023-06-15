import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  path = environment.backend + "/api/v/users"
  constructor(private http: HttpClient) { }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.path, user)
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete<any>(this.path + '/' + id)
  }

  getUser(id: any): Observable<any> {
    return this.http.get<any>(this.path + '/' + id)
  }
  updateUser(user: any): Observable<any> {
    return this.http.put<any>(this.path, user)

  }
}
