import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer, createReducer, on
} from '@ngrx/store';
import { AuthActions } from '../action-types';
import { User } from '../model/user.model';


export const authFeatureKey = 'auth';

export interface AppState {
  user: User
}

export const initialAuthState: AppState = {
  user: undefined
}


export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.loginn, (state, action) => {
    return{
      user: action.user
    }
  }),

  on(AuthActions.logoutt, (state, action) => {
    return{
      user: undefined
    }
  })


);

