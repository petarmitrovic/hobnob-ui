import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../services/data';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(
      private articlesService: ArticlesService,
      private userService: UserService,
      private router: Router) { }

  ngOnInit() {
    this.articles = this.articlesService.articles;
  }

  write() {
    this.router.navigateByUrl('/articles/edit');
  }
}
