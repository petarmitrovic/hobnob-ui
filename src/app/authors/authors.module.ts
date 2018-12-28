import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsRoutingModule } from './authors-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthorsRoutingModule
  ],
  declarations: [AuthorsComponent]
})
export class AuthorsModule { }
