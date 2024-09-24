import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodoApiItem } from '../models/interfaces/todoApiItem';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  readonly apiUrl = "https://dummyjson.com/todos/random"

  constructor(private http: HttpClient) { }

  getTodoApiItem(): Observable<ITodoApiItem> {
    return this.http.get<ITodoApiItem>(this.apiUrl)
  }
}
