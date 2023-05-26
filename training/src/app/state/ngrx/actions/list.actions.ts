import {createAction, props} from '@ngrx/store'
import { Products } from 'src/app/shared/products.model';

export const load_productList = createAction('[Product List] GET Product List');
export const load_success = createAction('[Product List] Success', props < { data: Products[] }>() );
export const load_failure = createAction('Product List] Failure', props <{error: string}>());