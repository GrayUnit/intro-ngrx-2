import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import * as MatiereEntity from '../entities/matiere.entity';

export const selectMatiereListState$ = (state: AppState) => state.matieres;

export const selectMatiereListEntities$ = createSelector(
    selectMatiereListState$,
    MatiereEntity.selectMatieres
);

export const selectMatiereLoading$ = createSelector(
    selectMatiereListState$,
    (matieres) => matieres.loading
)

export const selectMatiereLoaded$ = createSelector(
    selectMatiereListState$,
    (matieres) => matieres.loaded
);

export const selectMatiereError$ = createSelector(
    selectMatiereListState$,
    (matieres) => matieres.logs
);