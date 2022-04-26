import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { Article } from 'src/app/types/article.type';
import { addArticle, getArticles } from 'src/app/_store/actions/article.actions';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  loading = false;
  articles: Article[];
  articleForm = new FormGroup({});

  // Text Editor Configrations
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '400px',
    minHeight: '400px',
    maxHeight: '400px',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: true,
    sanitize: false,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['insertImage', 'insertVideo']]
  };


  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService,
    private router: Router
  ) {
    this.store.select(getArticles).subscribe(res => {
      this.articles = res.articles;
    });

    this.articleForm = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.minLength(3),]),
      dtPublished: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required, Validators.minLength(20)])
    });
  }

  ngOnInit(): void {

  }

  saveArticle() {
    this.loading = true;
    if (this.articleForm.valid) {
      const params = this.getArticleResponse(this.articleForm.getRawValue());
      this.store.dispatch(addArticle(params));
      setTimeout(() => {
        this.loading = false
        this.articleForm.reset();
        this.router.navigate(['/article', params.id])
      }, 1500);
    } else {
      this.loading = false;
    }
  }

  getArticleResponse(formValues = {}) {
    const user = this.authService.getUser();
    let newId = this.articles.length + 1;
    return {
      id: this.articles.length + 1,
      userImage: `https://source.unsplash.com/user/c_v_r/900x91${newId.toString()[0]}`,
      articleImage: `https://source.unsplash.com/user/c_v_r/900x90${newId.toString()[0]}`,
      excerpt: user?.userName,
      ...formValues
    }
  }

}
