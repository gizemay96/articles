import {
     ActionReducerMap,
     MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { articleReducer } from './article.reducer';


export interface State {
     articles: any;

}

export const reducers: ActionReducerMap<State> = {
     articles: articleReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
