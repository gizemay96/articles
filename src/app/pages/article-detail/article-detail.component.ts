import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { Article } from 'src/app/types/article.type';
import { getArticles, removeArticle } from 'src/app/_store/actions/article.actions';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  articles: Article[] = [];
  selectedArticle: Article | undefined;
  haveDeleteAccess = false;

  constructor(
    private store: Store, 
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
    ) {
    this.store.select(getArticles).subscribe(res => {
      this.articles = res.articles;
    });
  }

  ngOnInit(): void {
    const selectedId = this.route.snapshot.params['id'];
    this.selectedArticle = this.articles.find(article => article.id === Number(selectedId));
    const user = this.authService.getUser()
    this.haveDeleteAccess = user && user.role === 1;
  }

  deleteArticle(){
    this.store.dispatch(removeArticle(this.selectedArticle));
    setTimeout(() => {
      this.router.navigate(['/home'])
    }, 500);
  }

}
