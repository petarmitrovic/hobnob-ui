import { Injectable } from '@angular/core';
import { data } from './data';

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
}
