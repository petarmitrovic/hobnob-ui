import { Injectable } from '@angular/core';
import { data } from './data';

@Injectable()
export class AuthorsService {

    private _data = data;

    get authors() {
        return this._data;
    }

    author(uuid: string) {
        this._data.find(author => {
            return author.uuid === uuid;
        });
    }
}
