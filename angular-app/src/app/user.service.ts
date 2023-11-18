import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from "./user.model";

@Injectable()
export class UserService {
    private basurl = "http://localhost:8080/user"
    constructor(private httpClient: HttpClient) {
    }
    getUserList(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.basurl);
    }
    createUser(user: User): Observable<object> {
        return this.httpClient.post(`${this.basurl}`, user);
    }
    getUserbyID(id: number): Observable<User> {
        return this.httpClient.get<User>(`${this.basurl}/${id}`);
    }
    updateUser(id: number, user: User): Observable<object> {
        return this.httpClient.put(`${this.basurl}/${id}`, user);
    }
    deleteUSer(id: number): Observable<object> {
        return this.httpClient.delete(`${this.basurl}/${id}`);
    }
}