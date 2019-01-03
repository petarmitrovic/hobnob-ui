import { Injectable } from '@angular/core';
import { data} from './data';

export class ArticleForm {
  uuid: string;
  title: string;
  content: string;
  image: string;
}

@Injectable()
export class ArticlesService {

  private _data = data;

  get articles() {
    return this._data;
  }

  article(uuid: string) {
      return this._data.find(article => {
          return article.uuid === uuid;
      });
  }

  save(article: ArticleForm) {

    const uuid = 'uuid-article-' + (this._data.length + 1);
    const now = new Date();
    this._data.push({
        uuid: uuid,
        title: article.title,
        content: article.content,
        image: article.image,
        author: {
            uuid: 'uuid-author-4',
            name: 'Loki'
        },
        published_on: '1/3/2019'
    });
    return uuid;
  }
}
