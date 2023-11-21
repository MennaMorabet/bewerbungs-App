import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from "./user.model";

@Injectable()
export class UserService {
    private basurl = "http://localhost:8080/user"
    constructor(private httpClient: HttpClient) {}
    
    getUserList(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.basurl);
    }
    
    createUser(user: User): Observable<User> {
        return this.httpClient.post<User>(`${this.basurl}`, user);
    }
    
    getUserbyID(id: number): Observable<User> {
        return this.httpClient.get<User>(`${this.basurl}/${id}`);
    }
    
    
    updateUser(id: number, user: User): Observable<User> {
        return this.httpClient.put<User>(`${this.basurl}/${id}`, user);
    }
    
    deleteUser(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.basurl}/${id}`);
    }
}