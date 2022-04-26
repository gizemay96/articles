import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/types/article.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() article: Article | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  getUserLocale(){
    return navigator.languages[0];
  }

}
