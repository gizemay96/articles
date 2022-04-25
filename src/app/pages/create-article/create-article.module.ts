import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './create-article.component';
import { CreateArticleRoutingModule } from './create-article-routing.module';
import { AppMaterailModule } from 'src/app/modules/material.module';



@NgModule({
     imports: [
          CommonModule,
          CreateArticleRoutingModule,
          AppMaterailModule
     ],
     declarations: [CreateArticleComponent],
})
export class CreateArticleModule {

}
