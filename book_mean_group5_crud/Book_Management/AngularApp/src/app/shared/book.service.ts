import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Book } from './book.model';

@Injectable()
export class BookService {
  selectedBook: Book;
  books: Book[];
  readonly baseURL = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }

  postBook(bk: Book) {
    return this.http.post(this.baseURL, bk);
  }

  getBookList() {
    return this.http.get(this.baseURL);
  }

  putBook(bk: Book) {
    return this.http.put(this.baseURL + `/${bk._id}`, bk);
  }

  deleteBook(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
