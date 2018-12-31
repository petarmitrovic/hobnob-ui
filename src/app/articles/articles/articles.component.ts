import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../services/articles.service';
import {Article} from '../services/data';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articles = this.articlesService.articles;
  }

}
