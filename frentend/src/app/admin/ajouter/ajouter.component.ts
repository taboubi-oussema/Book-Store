import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {
  constructor(public data:ServerService,public ret: Router){}
  newBook = {
    title: '',
    author: '',
    description: ''
  };

  addBook(){
    if (!this.newBook.title || !this.newBook.author || !this.newBook.description) {
      window.alert('Please fill in all fields.');
      return;
    }
    this.data.newBook.title=this.newBook.title
    this.data.newBook.author=this.newBook.author
    this.data.newBook.description=this.newBook.description
    this.data.Post()
    window.alert('Film Edit successfully!');
    this.ret.navigateByUrl('/admin').then(() => {
      window.location.reload();})

    }

}
