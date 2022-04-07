import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post_List } from '../../models/list-post.interface';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post.interface';
import { ResponseI } from '../../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }

  getAllPost():Observable<Post_List[]>{
    let direction = this.url;
    return this.http.get<Post_List[]>(direction);
  }
  getPost(id:any):Observable<Post>{
    let direction = this.url +"/"+id;
    return this.http.get<Post>(direction);
  }
  putPost(form:Post):Observable<Post>{
    let direction = this.url +"/"+form.id;
    return this.http.put<Post>(direction,form);
  }
  postPost(form:Post):Observable<Post>{
    let direction = this.url;
    return this.http.post<Post>(direction,form);
  }
}
