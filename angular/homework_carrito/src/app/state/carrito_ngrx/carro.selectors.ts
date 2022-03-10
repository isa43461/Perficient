import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { carState } from "./carro.reducer";

export const selectTodos = (state: AppState) => state.cars;
export const selectLoading = createSelector(selectTodos,
    (state: carState) => state.loading);
export const selectAllCars = createSelector(selectTodos,
    (state: carState) => state.data);