import { Component, OnInit } from '@angular/core';
/**The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component. It's a good place
 *  to put initialization logic. */

import{books} from '../books';
import{BOOKS} from '../mock-books';

/**
 * @Component is a decorator function that specifies the Angular
 *  metadata for the component.
 */
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

/**Always export the component class so you can import it elsewhere …
 *  like in the AppModule. */
export class BooksComponent implements OnInit {

  books = BOOKS;
  selectedbook? : books;
  
  /*book: books ={
    itemId: 1001,
    name: 'CR page 80',
    price: 'Rs.100.00',
    qty: 10
  };*/

  
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(books: books): void {
    this.selectedbook = books;
  }

}
