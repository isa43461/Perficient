import { createSelector } from "@ngrx/store";
import { AppState } from "../../app.state";
import { listState } from "../reducers/list.reducers";

export const selectTodos = (state: AppState) => state.list;
export const selectLoading = createSelector(selectTodos,
    (state: listState) => state.loading);
export const selectAllItems = createSelector(selectTodos,
    (state: listState) => state.data);

export const selectProductDetail = (props: { slug: string }) => createSelector(selectAllItems, 
    (list) => list.find((product) => product.slug === props.slug));