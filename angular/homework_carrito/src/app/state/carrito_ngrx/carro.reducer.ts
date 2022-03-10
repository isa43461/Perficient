import { createReducer,on, State } from "@ngrx/store";
import { loadHttp_Api, load_fail, load_success } from "./carro.actions";
import { Api } from "src/app/model/api.model";

export interface carState {
    data : Api[];
    error: string;
    loading: boolean;
}

export const initialState: carState = {
    data : [],
    error: null,
    loading: false
}

export const carReducer = createReducer(
    initialState,
    on(loadHttp_Api, (state) => ({...state, loading : true})),
    on(load_success, (state, { data }) =>({
        ...state,
        data: data,
        error: null,
        loading: false
    })),
    on(load_fail, (state, { error }) =>({
        ...state,
        error: error,
     }))
)