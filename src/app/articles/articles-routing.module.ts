import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';

const articlesRoutes: Routes = [
    { path: 'articles', component: ArticlesComponent },
    { path: 'articles/:article_uuid', component: ArticleComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(articlesRoutes) ],
    exports: [ RouterModule ],
    providers: [ ]
})
export class ArticlesRoutingModule { }
