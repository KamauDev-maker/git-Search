import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common'
import { SearchFormComponent } from './search-form/search-form.component';
const routes: Routes = [
  {path:"gitUser",component:SearchFormComponent}

]

@NgModule({
  imports: [
  CommonModule,
  RouterModule.forRoot(routes)
],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
