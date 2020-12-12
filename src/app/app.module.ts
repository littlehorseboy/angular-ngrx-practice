import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './state/reducers/counter.reducer';
import { booksReducer } from './state/reducers/books.reducer';
import { booksCollectionReducer } from './state/reducers/books-collection.reducer';

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
      books: booksReducer,
      booksCollection: booksCollectionReducer,
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
