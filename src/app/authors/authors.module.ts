import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsService } from './services/authors.service';

@NgModule({
  imports: [
    CommonModule,
    AuthorsRoutingModule
  ],
  declarations: [
    AuthorsComponent
  ],
  providers: [
    AuthorsService
  ]
})
export class AuthorsModule { }
