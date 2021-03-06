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
import { HeroSearchComponent, ListItemDirective } from './hero-search/hero-search.component';
import { SignupFormComponent } from './signup-form.components';
import { StoreModule } from '@ngrx/store';
import { reducer } from './ngrx/reducer/index';
import { HttpInterceptorService } from './http/HttpInterceptorService';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    MyconpentComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    SignupFormComponent,
    ListItemDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducer)
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    HeroService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
