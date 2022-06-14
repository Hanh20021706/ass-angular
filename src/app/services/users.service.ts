import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUer } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URL:string = 'http://localhost:3000/user';
  constructor(private http :HttpClient) { }



  getUser(id:number):Observable<IUer>{
    return this.http.get<IUer>(`${this.API_URL}/${id}`)
}
getUsers():Observable<IUer[]>{
    return this.http.get<IUer[]>(this.API_URL)
}
createUser(user: any): Observable<IUer>{
    return this.http.post<IUer>(`${this.API_URL}`,user)
}
removeUser(id:number):Observable<IUer>{
    return this.http.delete<IUer>(`${this.API_URL}/${id}`)
}
updatUser(user: IUer):Observable<IUer>{
    return this.http.put<IUer>(`${this.API_URL}/${user.id}`, user)
}
}
