import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared.module';
import { ArticleDetailComponent } from './article-detail.component';
import { ArticleDetailRoutingModule } from './article-detail-routing.module';
import { SafeHtmlPipe } from 'src/app/_helpers/sanitized-html.pipe';

@NgModule({
     imports: [
          CommonModule,
          ArticleDetailRoutingModule,
          SharedModule,
         
     ],
     declarations: [ArticleDetailComponent ,  SafeHtmlPipe],
})
export class ArticleDetailModule {

}
