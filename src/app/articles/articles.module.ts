import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesService } from './services/articles.service';
import { ArticleComponent } from './article/article.component';
import { ClarityModule } from '@clr/angular';
import { EditComponent } from './edit/edit.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ArticlesRoutingModule,
    ClarityModule,
  ],
  declarations: [
    ArticlesComponent,
    ArticleComponent,
    EditComponent
  ],
  providers: [
    ArticlesService
  ]
})
export class ArticlesModule { }
