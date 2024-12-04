import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './client/detail/home-page/home-page.component';
import { DetailComponent } from './client/detail/detail.component';
import { BooksComponent } from './admin/books/books.component';
import { AjouterComponent } from './admin/ajouter/ajouter.component';
import { ModiferComponent } from './admin/modifer/modifer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'admin', component: BooksComponent },
  { path: 'add', component: AjouterComponent },
  { path: 'edit', component: ModiferComponent },
  { path: 'edit/:id', component: ModiferComponent },
  { path: 'detail/:id', component: DetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
