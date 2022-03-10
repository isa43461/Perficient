import { AppState } from "../app.state";
import { selectAllCars } from "./carro.selectors";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Data_Service } from "./carro.service";
import { loadHttp_Api, load_fail, load_success } from "./carro.actions";
import { Injectable } from "@angular/core";
import { catchError, from, switchMap, map, of } from "rxjs";

@Injectable()
export class CarEffects {
    constructor(private actions$: Actions, private store: Store<AppState>, private dataService: Data_Service){}
    
    loadInfo$ = createEffect(() =>
    this.actions$.pipe(ofType(loadHttp_Api),
        switchMap(() =>
            from(this.dataService.GetAPI()).pipe(
                map((data) => load_success({data : data})),
                catchError((error) => of(load_fail({error})))
            )
        )
    ));
}