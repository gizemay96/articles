import { createReducer, on } from '@ngrx/store';
import { addArticle, getArticles, removeArticle } from '../actions/article.actions';
import articlesData from '../../json/articles.json'


export const initialArticles = articlesData;

const articleObj = createReducer(initialArticles,
     on(addArticle, (state, action) => {
          let data = JSON.parse(JSON.stringify(action));
          data.id = state.length + 1;
          return [...state , data];
     }),

     on(removeArticle, (state, action) => {
          return action;
     }),

     on(getArticles, (state, action) => {
          return state;
     }),
);

export function articleReducer(state: any, action: any) {
     return articleObj(state, action);
}