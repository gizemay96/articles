import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Article } from 'src/app/types/article.type';
import { getArticles } from 'src/app/_store/actions/article.actions';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  articles: Article[] = [];
  selectedArticle: Article | undefined;

  constructor(private store: Store, private route: ActivatedRoute) {
    this.store.select(getArticles).subscribe(res => {
      this.articles = res.articles;
    });
  }

  ngOnInit(): void {
    const selectedId = this.route.snapshot.params['id'];
    this.selectedArticle = this.articles.find(article => article.id === Number(selectedId));
  }

}
