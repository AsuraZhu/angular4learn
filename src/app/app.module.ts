import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me.component';
import { MyconpentComponent } from './myconpent/myconpent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './hero.service';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { SignupFormComponent } from './signup-form.components';
import { StoreModule } from '@ngrx/store';
import { reducer } from './ngrx/reducer/index';
import { HttpInterceptorService } from './http/HttpInterceptorService';


@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    MyconpentComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducer)
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [HeroService, HttpInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
