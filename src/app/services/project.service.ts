import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  API_URL:string = 'http://localhost:3000/projects';
  constructor(private http : HttpClient) {

  }
    getproject(id:number):Observable<IProject>{
        return this.http.get<IProject>(`${this.API_URL}/${id}`)
    }
    getprojects():Observable<IProject[]>{
        return this.http.get<IProject[]>(this.API_URL)
    }
    createproject(project: any): Observable<IProject>{
        return this.http.post<IProject>(`${this.API_URL}`,project)
    }
    removeproject(id:number):Observable<IProject>{
        return this.http.delete<IProject>(`${this.API_URL}/${id}`)
    }
    updateproject(project: IProject):Observable<IProject>{
        return this.http.put<IProject>(`${this.API_URL}/${project.id}`, project)
    }
}
