import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './state/reducers/counter.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      count: counterReducer,
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
