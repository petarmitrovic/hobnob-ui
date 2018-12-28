import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';

const articlesRoutes: Routes = [
    { path: 'articles', component: ArticlesComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(articlesRoutes) ],
    exports: [ RouterModule ],
    providers: [ ]
})
export class ArticlesRoutingModule { }
