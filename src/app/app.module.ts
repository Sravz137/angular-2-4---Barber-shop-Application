import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomerFromComponent } from './customer-from/customer-from.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  declarations: [
    AppComponent,
    CustomerFromComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
