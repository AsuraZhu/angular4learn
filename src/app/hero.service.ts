import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class HeroService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'http://batpool.dev.ailadui.net/v1/api/user/profile/userinfo';

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  constructor(private http: HttpClient) { }
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => {
        const hero = [];
        hero[0] = new Hero(response['data']['user_type'] , 'hass' , 'aaa' , 'aaa');
        //  现将后台获取到的数据处理后 返回 hero[]
        return hero;
      })
      .catch(this.handleError);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
        .toPromise()
        .then(response => response['data'] as Hero)
        .catch(this.handleError);
  }
}

