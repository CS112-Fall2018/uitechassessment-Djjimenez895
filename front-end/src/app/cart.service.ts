import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Identifiers } from '@angular/compiler';
import { Item } from './cart';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) {}

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:5555/list');
  }

  getItem(name: string): Observable<Item> {
    return this.http.get<Item>('http://localhost:5555/list');
  }

  insertItem(item: Item): Observable<Item> {
    return this.http.post<Item>('http://localhost:5555/item/add', item);
  }
}
