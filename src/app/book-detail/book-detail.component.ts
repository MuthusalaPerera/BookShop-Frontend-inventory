import { Component, Input, OnInit } from '@angular/core';

import { books } from '../books';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() books?: books;
  constructor() { }

  ngOnInit(): void {
  }

}
