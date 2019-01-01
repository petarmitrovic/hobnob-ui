import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service';
import { Author } from '../services/data';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors: Author[];

  constructor(private authorsService: AuthorsService) { }

  ngOnInit() {
    this.authors = this.authorsService.authors;
  }
}
