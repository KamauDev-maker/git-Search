import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './user-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { UserResultComponent } from './user-result/user-result.component';
import { FormsModule } from '@angular/forms';
import { DatePipePipe } from './date-pipe.pipe';
import { AppHighlightDirective } from './app-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    UserResultComponent,
    DatePipePipe,
    AppHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
