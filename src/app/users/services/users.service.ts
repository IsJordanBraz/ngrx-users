import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../store/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  clientesUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  createUser(model: User): Observable<User> {
    return this.http.post<User>(this.clientesUrl, model);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.clientesUrl);
  }

  getUser(userID: number | string): Observable<User> {
    return this.http.get<User>(this.clientesUrl + userID);
  }

  updateUsers(userID: number | string, changes: Partial<User>): Observable<User> {
    return this.http.put<User>(this.clientesUrl + userID, changes);
  }

  deleteUsers(userId: number | string) {
    return this.http.delete(this.clientesUrl + userId);
  }
}
