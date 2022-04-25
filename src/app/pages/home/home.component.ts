import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/types/article.type';
import  articlesData  from '../../json/articles.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: Article[] = articlesData;

  constructor() { }

  ngOnInit(): void {
  }

}
