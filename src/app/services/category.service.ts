import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL:string = 'http://localhost:3000/categories';
  constructor(private http : HttpClient) {

  }
    getcategory(id:number):Observable<ICategory>{
        return this.http.get<ICategory>(`${this.API_URL}/${id}`)
    }
    getcategories():Observable<ICategory[]>{
        return this.http.get<ICategory[]>(this.API_URL)
    }
    createcategory(category: any): Observable<ICategory>{
        return this.http.post<ICategory>(`${this.API_URL}`,category)
    }
    removecategory(id:number):Observable<ICategory>{
        return this.http.delete<ICategory>(`${this.API_URL}/${id}`)
    }
    updatecategory(category: ICategory):Observable<ICategory>{
        return this.http.put<ICategory>(`${this.API_URL}/${category.id}`, category)
    }
}
