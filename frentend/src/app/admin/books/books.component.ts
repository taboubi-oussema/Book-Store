import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  constructor(public data: ServerService, public ret: Router) {}

  ngOnInit(): void {}

 

  deleteBook(bookId: number) {
    console.log(bookId);
    this.data.DeletF(bookId);
    window.alert('Film deleted successfully!');
    this.ret.navigateByUrl('/admin').then(() => {
      window.location.reload();
    });
  }
}
