import { Component, OnInit, ContentChild } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';



import { HeroSearchService } from '../hero-search.service';
import { Hero } from '../hero';
import { AfterContentInit, ContentChildren, QueryList, Directive } from '@angular/core';



@Directive({ selector: 'li'})
export class ListItemDirective {
}
@Component({
  selector: 'app-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit, AfterContentInit {
  @ContentChildren(ListItemDirective) items: QueryList<ListItemDirective>;

  heroes: Observable<Hero[]>;

  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    // this.heroes =
    // .subscribe( term => this.heroSearchService.search(term).subscribe(heroes => this.heroes ));
    this.heroes = this.searchTerms
      .debounceTime(3000)        // wait 3000ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Hero[]>([]),
      )
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  ngAfterContentInit(): void {
    console.log(this.items);
  }

  gotoDetail(hero: Hero): void {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
