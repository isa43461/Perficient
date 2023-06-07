import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ListService } from "../services/list.services";
import { load_failure, load_productList, load_success } from "../actions/list.actions";
import { Injectable } from "@angular/core";
import { catchError, from, switchMap, map, of } from "rxjs";
import { AppState } from "../../app.state";

@Injectable()
export class listEffects {
    constructor(private actions$: Actions, private store: Store<AppState>, private dataService: ListService){}
    
    loadInfo$ = createEffect(() =>
    this.actions$.pipe(ofType(load_productList),
        switchMap(() =>
            from(this.dataService.GetProductList()).pipe(
                map((data) => load_success({data: data})),
                catchError((error) => of(load_failure({error})))
            )
        )
    ));
}