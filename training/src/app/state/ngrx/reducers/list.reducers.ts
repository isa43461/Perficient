import { createReducer,on, State } from "@ngrx/store";
import { load_failure, load_productList, load_success } from "../actions/list.actions";
import { Products } from "src/app/shared/products.model";

export interface listState {
    data : Products[];
    error: string;
    loading: boolean;
}

export const initialState: listState = {
    data : [],
    error: null,
    loading: false
}

export const listReducer = createReducer(
    initialState,
    on(load_productList, (state) => ({...state, loading : true})),
    on(load_success, (state, { data }) =>({
        ...state,
        data: data,
        error: null,
        loading: false
    })),
    on(load_failure, (state, { error }) =>({
        ...state,
        error: error,
     }))
)