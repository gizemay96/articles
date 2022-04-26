import { createReducer, on } from '@ngrx/store';
import { addArticle, getArticles, removeArticle } from '../actions/article.actions';
import { Article } from 'src/app/types/article.type';


export const initialArticles: Article[] = [];

const articleObj = createReducer(initialArticles,

     // Add New Article To State
     on(addArticle, (state, action) => {
          let data = JSON.parse(JSON.stringify(action));
          data.id = state.length + 1;
          return [...state, data];
     }),

     // Remove Article From State
     on(removeArticle, (state, action) => {
          const index = state.map(item => item.id).indexOf(action.id);
          return state.slice(0, index);
     }),

     // Get Article List
     on(getArticles, (state, action) => {
          return state;
     }),
);

export function articleReducer(state: any, action: any) {
     return articleObj(state, action);
}