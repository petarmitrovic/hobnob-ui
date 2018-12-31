import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { ArticlesService } from '../services/articles.service';
import {Article} from '../services/data';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article_uuid: string;
  article: Article;
  lines: string[];
  image: string;

  constructor(
      private route: ActivatedRoute,
      private articlesService: ArticlesService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.article_uuid = params['article_uuid'];
      this.article = this.articlesService.article(this.article_uuid);
      this.lines = this.article.content.split('\n').filter(line => line.length);
      this.image = this.article.image.replace('400/250', '800/150');
    });
  }
}
