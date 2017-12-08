import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
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
  constructor(private heroService: HeroService) { }
  onSubmit(): void {
    this.submitted = true;
  }
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => { console.log(heroes[2].name); this.heroes = heroes; } );
}

}
