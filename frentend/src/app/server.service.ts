import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServerService {
  NewBooks:any={}
  newBook = {
    title: '',
    author: '',
    description: ''
  };
  api="http://localhost:3000/books";
  images: any[] = [
    {
      img:
        '../../assets/img1.jpg',
    },
    {
      img: '../../assets/img.jpg',
    },
  ];
  old_data: any;

  constructor(public http:HttpClient) {
    http.get(this.api).subscribe(e=>this.NewBooks=e,(error)=>(console.error()
    ));
  }
  detail(id:any){
    return this.http.get(`${this.api}/${id}`).subscribe((e) => {
      console.log(e), (this.old_data = e);
    });
  }
  getProducts(){
    return this.http.get(this.api).subscribe(e=>this.NewBooks=e,(error)=>(console.error()))
  }

  Post() {
    console.log(this.newBook)
    this.http.post(this.api, this.newBook).subscribe(
      (response) => {
        console.log('Response:', response);
      },
      (error) => {
        console.error('Error in POST request:', error);
      }
    );
  }
  DeletF(id:any){
    this.http.delete(`${this.api}/${id}`).subscribe(e=>console.log('success'),(error)=>(console.error()))
  }
  update(id:any){
    this.http.put(`${this.api}/${id}`,this.old_data).subscribe(e=>console.log('success'),(error)=>(console.error()))
  }
}
