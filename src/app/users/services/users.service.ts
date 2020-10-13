import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = "http://localhost:5001/clientes";

  constructor(private http: HttpClient) { }

  createUser(model: Users) {
    return this.http.post(this.baseUrl, model);
  }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl);
  }

  editUsers(model: Users): Observable<Users> {
    return this.http.put<Users>(this.baseUrl + model.id, model);
  }

  deleteUsers(userId: number) {
    return this.http.delete(this.baseUrl + userId);
  }
}
