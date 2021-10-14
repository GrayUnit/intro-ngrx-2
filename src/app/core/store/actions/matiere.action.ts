import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { Matiere } from "../../interfaces/matiere";


export const LoadInitMatiereAction = createAction(
    '[matiereList] Load Initial Matieres List'
);

export const SuccessInitMatiereAction = createAction(
    '[matiereList] Success Initial Matieres List',
    props<{items: Matiere[]}>()
);

export const LoadCreateMatiereAction = createAction(
    '[matiereList] Load create matiere',
    props<{item: Matiere}>()
);

export const SuccessCreateMatiereAction = createAction(
    '[matiereList] Success create matiere',
    props<{item: Matiere}>()
);

export const LoadDeleteMatiereAction = createAction(
    '[matiereList] Load delete matiere',
    props<{id: number}>()
);

export const SuccessDeleteMatiereAction = createAction(
    '[matiereList] Success delete matiere',
    props<{id: number}>()
);

export const ErrorLoadAction = createAction(
    '[matiereList] Error Action',
    props<{error: HttpErrorResponse}>()
);