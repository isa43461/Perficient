import {createAction, props} from '@ngrx/store'
import { Api } from 'src/app/model/api.model';

export const loadHttp_Api = createAction('[Carro Page] GET API');
export const load_success = createAction('[Carro Page] Succes', props < { data: Api[] }>() );
export const load_fail = createAction('[Carro Page] Failed', props <{error: string}>());
