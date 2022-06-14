import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoryPost } from '../models/CategoryPosts';

@Injectable({
  providedIn: 'root',
})
export class CategoryPostService {
  API_URL: string = 'http://localhost:3000/categoryPosts';

  constructor(private http: HttpClient) {}

  getcategoryPost(id: number): Observable<ICategoryPost> {
    return this.http.get<ICategoryPost>(`${this.API_URL}/${id}`);
  }
  getcategoriesPosts(): Observable<ICategoryPost[]> {
    return this.http.get<ICategoryPost[]>(this.API_URL);
  }
  createcategoryPost(categoryPost: any): Observable<ICategoryPost> {
    return this.http.post<ICategoryPost>(`${this.API_URL}`, categoryPost);
  }
  removecategoryPost(id: number): Observable<ICategoryPost> {
    return this.http.delete<ICategoryPost>(`${this.API_URL}/${id}`);
  }
  updatecategoryPost(categoryPost: ICategoryPost): Observable<ICategoryPost> {
    return this.http.put<ICategoryPost>(`${this.API_URL}/${categoryPost.id}`, categoryPost);
  }
}
