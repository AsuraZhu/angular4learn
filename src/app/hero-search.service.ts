import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Hero } from './hero';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class HeroSearchService {

  constructor(private http: HttpClient) {}

  search(term: string): Observable<Hero[]> {
      return this.http
      .get(`http://localhost:8080/api/heroes/?name=${term}`)
      .map(response => response['data'] as Hero[])
      .catch(err => {
        return Observable.of<Hero[]>([]);
      });
  }
}
