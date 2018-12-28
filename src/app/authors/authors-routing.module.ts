import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';

const authorsRoutes: Routes = [
    { path: 'authors', component: AuthorsComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(authorsRoutes) ],
  exports: [ RouterModule ],
  providers: [ ]
})
export class AuthorsRoutingModule { }
