import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Store } from '@ngrx/store';
import { addArticle } from 'src/app/_store/actions/article.actions';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
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
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
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
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };


  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {
    this.articleForm = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.minLength(3),]),
      dsPublishedDate: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required, Validators.minLength(50)])
    });
  }

  ngOnInit(): void {

  }

  saveArticle() {
    const params = this.getArticleResponse(this.articleForm.getRawValue());
    this.store.dispatch(addArticle(params));
  }

  getArticleResponse(formValues = {}) {
    return {
      id: 0,
      userImage: `https://source.unsplash.com/user/c_v_r/900x910`,
      articleImage: "https://source.unsplash.com/user/c_v_r/900x900",
      ...formValues
    }
  }

}
