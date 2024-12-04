import { ServerService } from '../../../server.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
 
  constructor(public data: ServerService) {}
  ngOnInit(): void {

  }
}
