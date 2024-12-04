import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './client/detail/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './client/detail/detail.component';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './admin/books/books.component';
import { HeaderComponent } from './header/header.component';
import { AjouterComponent } from './admin/ajouter/ajouter.component';
import { ModiferComponent } from './admin/modifer/modifer.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, DetailComponent, BooksComponent, HeaderComponent, AjouterComponent, ModiferComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
