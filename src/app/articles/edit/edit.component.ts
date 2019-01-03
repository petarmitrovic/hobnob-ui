import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ArticleForm, ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  articleUuid: string;
  title: string;
  content: string;
  image: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.articleUuid = params['article_uuid'] || '';
    });
  }

  save() {
    const article: ArticleForm = {
      uuid: this.articleUuid,
      title: this.title,
      content: this.content,
      image: this.image
    };
    const uuid = this.articlesService.save(article);
    this.router.navigateByUrl('/articles/' + uuid);
  }
}
