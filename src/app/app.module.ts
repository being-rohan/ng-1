import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Productcomponent } from './component/product/product.component';
import { Redchillis } from './component/products/products.component';
import { Redchillis2 } from './component/productive/productive.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    Productcomponent,
    Redchillis,
    Redchillis2,
    DirectivesComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
