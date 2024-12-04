import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-modifer',
  templateUrl: './modifer.component.html',
  styleUrls: ['./modifer.component.css'],
})
export class ModiferComponent {
  Id: string | null = null;
  constructor(
    public data: ServerService,
    private route: ActivatedRoute,
    public ret: Router
  ) {}
  Modifier(f:NgForm) {
    if (!f.value['title'] || !f.value['author'] || !f.value['description']) {
      window.alert('Please fill in all fields.');
      return;
    }
try{
    this.data.old_data.title=f.value['title'];
    this.data.old_data.author=f.value['author'];
    this.data.old_data.description=f.value['description'];
    this.data.update(this.Id);
    window.alert('Film Edit successfully!');
      this.ret.navigateByUrl('/admin').then(() => {
        window.location.reload();})
      }catch(error){
        alert('error')
      }

  }
  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get('id');
    this.data.detail(this.Id);
  }
}
