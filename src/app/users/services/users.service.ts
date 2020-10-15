import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = "http://localhost:5001/clientes/";

  constructor(private http: HttpClient) { }

  createUser(model: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, model);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  updateUsers(userID: number | string, changes: Partial<User>): Observable<User> {
    return this.http.put<User>(this.baseUrl + userID, changes);
  }

  deleteUsers(userId: number | string) {
    return this.http.delete(this.baseUrl + userId);
  }
}
