import {createAction, props} from '@ngrx/store'
import { User } from './model/user.model'

export const loginn = createAction(
    '[Login Page] User Login',
    props<{user: User}>()
);

export const logoutt = createAction(
    "[Top Menu] Logout",
);