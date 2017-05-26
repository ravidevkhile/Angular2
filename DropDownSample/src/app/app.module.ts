import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent,EqualPipe } from './app.component';
import { MultiselectComponent,FilterPipe } from './multiselect/multiselect.component';
import { MultiselectDDComponent } from './multiselect-dd/multiselect-dd.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiselectComponent,
    MultiselectDDComponent,FilterPipe, EqualPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, FormsModule, ReactiveFormsModule,
    HttpModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
