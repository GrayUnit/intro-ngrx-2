import { createReducer, on } from "@ngrx/store";
import { initialState, MatiereListAdapter, MatiereListStateEntity } from "../entities/matiere.entity";
import * as MatiereAction from '../actions/matiere.action';
import { Matiere } from "../../interfaces/matiere";
import { MatiereListEffects } from "../effects/matiere.effect";
import { HttpErrorResponse } from "@angular/common/http";

export const matiereReducer = createReducer(
    initialState,
    on(
        MatiereAction.LoadInitMatiereAction,
        (state: MatiereListStateEntity): MatiereListStateEntity => {
            return {
                ...state,
                loading: true
            }
        }
    ),
    on(
        MatiereAction.SuccessInitMatiereAction,
        (state: MatiereListStateEntity, {items}: {items: Matiere[]}): MatiereListStateEntity => {
            return {
                ...MatiereListAdapter.addMany(items, state),
                loading: false,
                loaded: true
            }
        }
    ),
    on(
        MatiereAction.LoadCreateMatiereAction,
        (state: MatiereListStateEntity, {item}: {item: Matiere}): MatiereListStateEntity => {
            return {
                ...state,
                loading: true
            }
        }
    ),
    on(
        MatiereAction.SuccessCreateMatiereAction,
        (state: MatiereListStateEntity, {item}: {item: Matiere}): MatiereListStateEntity => {
            return {
                ...MatiereListAdapter.addOne(item, state),
                loading: false,
                logs: {type: 'SUCCESS', message: 'La matière a bien été créée'}
            }
        }
    ),
    on(
        MatiereAction.LoadDeleteMatiereAction,
        (state: MatiereListStateEntity, {id}: {id: number}): MatiereListStateEntity => {
            return {
                ...state,
                loading: true
            }
        }
    ),
    on(
        MatiereAction.SuccessDeleteMatiereAction,
        (state: MatiereListStateEntity, {id}: {id: number}): MatiereListStateEntity => {
            return {
                ...MatiereListAdapter.removeOne(id, state),
                loading: false,
                logs: {type: 'SUCCESS', message: 'La matière a bien été supprimée'}
            }
        }
    ),
    on(
        MatiereAction.ErrorLoadAction,
        (state: MatiereListStateEntity, {error}: {error: HttpErrorResponse}): MatiereListStateEntity => {
            return {
                ...state,
                logs: {type: 'ERROR', message: error.message},
                loading: false
            }
        }
    )


)