import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
    API_URL:string = 'http://localhost:3000/posts';
  constructor(private http : HttpClient) {

  }
    getPost(id:number):Observable<IPost>{
        return this.http.get<IPost>(`${this.API_URL}/${id}`)
    }
    getPosts():Observable<IPost[]>{
        return this.http.get<IPost[]>(this.API_URL)
    }
    createPost(post: any): Observable<IPost>{
        return this.http.post<IPost>(`${this.API_URL}`,post)
    }
    removePost(id:number):Observable<IPost>{
        return this.http.delete<IPost>(`${this.API_URL}/${id}`)
    }
    updatePost(post: IPost):Observable<IPost>{
        return this.http.put<IPost>(`${this.API_URL}/${post.id}`, post)
    }
    getPostsCate():Observable<IPost[]>{
        return this.http.get<IPost[]>(`${this.API_URL}?_expand=categoryPost`)
    }
}
