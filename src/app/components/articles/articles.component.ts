import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articleListTitle = 'Our latest hot topics';

  constructor() { }

  ngOnInit(): void {
  }

}
