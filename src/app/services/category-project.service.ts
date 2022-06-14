import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoryProject } from '../models/CategoryProject';

@Injectable({
  providedIn: 'root'
})
export class CategoryProjectService {
  API_URL: string = 'http://localhost:3000/categoriesProject';
  constructor(private http :HttpClient) { }


  getcategoryProject(id: number): Observable<ICategoryProject> {
    return this.http.get<ICategoryProject>(`${this.API_URL}/${id}`);
  }
  getcategoriesProjects(): Observable<ICategoryProject[]> {
    return this.http.get<ICategoryProject[]>(this.API_URL);
  }
  createcategoryProject(categoryProject: any): Observable<ICategoryProject> {
    return this.http.post<ICategoryProject>(`${this.API_URL}`, categoryProject);
  }
  removecategoryProject(id: number): Observable<ICategoryProject> {
    return this.http.delete<ICategoryProject>(`${this.API_URL}/${id}`);
  }
  updatecategoryProject(categoryProject: ICategoryProject): Observable<ICategoryProject> {
    return this.http.put<ICategoryProject>(`${this.API_URL}/${categoryProject.id}`, categoryProject);
  }
}
