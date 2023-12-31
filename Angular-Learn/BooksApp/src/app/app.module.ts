import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from '@angular/platform-browser';
import { BooksComponent } from './books/books.component';
import { BookComponent } from "./books/book/book.component";
import { ServicesService } from "./books/services.service";
import { BooksModule } from "./books/books/books.module";
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    declarations: [AppComponent, CartComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, BooksModule, AppRoutingModule],
    providers: [ServicesService]

})
export class AppModule{

}