import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { Matiere } from "../../interfaces/matiere";
import { MatiereService } from "../../services/matiere.service";
import { ErrorLoadAction, LoadCreateMatiereAction, LoadDeleteMatiereAction, LoadInitMatiereAction, SuccessCreateMatiereAction, SuccessDeleteMatiereAction, SuccessInitMatiereAction } from "../actions/matiere.action";



@Injectable()
export class MatiereListEffects {
    
    constructor(private matiereService: MatiereService, private actions$: Actions) {}

    loadMatiere$ = createEffect(
        () => this.actions$.pipe(
            ofType(LoadInitMatiereAction),
            switchMap(() => this.matiereService.getMatieres().pipe(
                map((matieres: Matiere[]) => SuccessInitMatiereAction({items: matieres}))
            ))
        )
    );

    loadCreateMatiere$ = createEffect(
        () => this.actions$.pipe(
            ofType(LoadCreateMatiereAction),
            switchMap((action) => this.matiereService.createMatiere(action.item).pipe(
                map((matiere: Matiere) => SuccessCreateMatiereAction({item: matiere})),
                catchError(err => of(ErrorLoadAction({error: err})))
            ))
        )
    );

    loadDeleteMatiere$ = createEffect(
        () => this.actions$.pipe(
            ofType(LoadDeleteMatiereAction),
            switchMap((action) => this.matiereService.deleteMatiere(action.id).pipe(
                map((id) => SuccessDeleteMatiereAction({id: id})),
                catchError(err => of(ErrorLoadAction({error: err})))
            ))
        )
    );
}