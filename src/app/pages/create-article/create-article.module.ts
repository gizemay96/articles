import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './create-article.component';
import { CreateArticleRoutingModule } from './create-article-routing.module';

@NgModule({
     imports: [
          CommonModule,
          CreateArticleRoutingModule,
     ],
     declarations: [CreateArticleComponent],
})
export class CreateArticleModule {

}
