import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  id: string | null = null;
  constructor(private route: ActivatedRoute, public data: ServerService) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.data.detail(this.id);
  }
}
