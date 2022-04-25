import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './create-article.component';
import { CreateArticleRoutingModule } from './create-article-routing.module';
import { AppMaterailModule } from 'src/app/modules/material.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
     imports: [
          CommonModule,
          CreateArticleRoutingModule,
          AppMaterailModule,
          AngularEditorModule,
          HttpClientModule,
          ReactiveFormsModule,
          FormsModule
     ],
     declarations: [CreateArticleComponent],
})
export class CreateArticleModule {

}
