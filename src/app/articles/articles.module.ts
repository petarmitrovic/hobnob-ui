import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesService } from './services/articles.service';
import { ArticleComponent } from './article/article.component';


@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ],
  declarations: [
      ArticlesComponent,
      ArticleComponent
  ],
    providers: [
      ArticlesService
    ]
})
export class ArticlesModule { }
