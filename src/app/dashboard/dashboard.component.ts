import { Component, OnInit, trigger, state, style } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {Store} from '@ngrx/store';
import * as reducer from '../ngrx/reducer';
import * as load from '../ngrx/action/loading';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('signal', [
        state('go' , style({
          'background-color': 'green'
        })),
        state('stop' , style({
          'background-color': 'red'
        }))
    ])
  ]
})
export class DashboardComponent implements OnInit {

  // 动画
  singnal: string;
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
  stop() {
    this.singnal = 'stop';
  }
  go() {
    this.singnal = 'go';
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
      .then(heroes => { console.log(heroes); this.heroes = heroes; } );
}

}
