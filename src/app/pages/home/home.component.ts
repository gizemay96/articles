import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Article } from 'src/app/types/article.type';
import { getArticles, removeArticle } from 'src/app/_store/actions/article.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: Article[] = [];

  constructor(private store: Store) {
    this.store.select(getArticles).subscribe(res => {
      this.articles = res.articles;
    });
  }

  ngOnInit(): void {
  }

  deleteArticle(article = {}) {
    this.store.dispatch(removeArticle(article));
  }

}
