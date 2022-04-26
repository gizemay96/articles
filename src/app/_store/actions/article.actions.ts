import { createAction, props } from "@ngrx/store";

export const addArticle = createAction('Add Article' , props<any>());
export const removeArticle = createAction('Remove Article', props<any>());
export const getArticles = createAction('Get Articles' , props<any>());
