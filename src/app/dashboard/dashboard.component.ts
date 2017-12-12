import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {Store} from '@ngrx/store';
import * as reducer from '../ngrx/reducer';
import * as load from '../ngrx/action/loading';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];
  submitted = false;
  // name =  'zs';
  test = 'zs';
  model = new Hero(18, 'Dr IQ', 'Really Smar', 'Chuck Overstreet');
  items = ['First', 'Second', 'Third'];
  tagState$: Observable<boolean>;
  constructor(private heroService: HeroService, private store: Store<reducer.State>) {
      this.tagState$ = this.store.select('loading');
   }
  onSubmit(): void {
    this.submitted = true;
  }
  close(): void {
    this.store.dispatch(new load.HideAction());
  }
  open(): void {
    this.store.dispatch(new load.ShowAction());
  }
  ngOnInit(): void {
    console.log(this.tagState$, this.store);
    this.store.dispatch(new load.ShowAction());
    this.heroService.getHeroes()
      .then(heroes => { console.log(heroes[2].name); this.heroes = heroes; } );
}

}
