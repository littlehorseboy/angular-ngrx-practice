import { createAction, props } from '@ngrx/store';

import { Book } from 'src/app/book-list/book.model';

export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookId: string }>(),
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId }>(),
);

export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<Book>(),
);
