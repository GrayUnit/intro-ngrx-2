import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Matiere } from "../../interfaces/matiere";


export interface MatiereListStateEntity extends EntityState<Matiere> {
    loading: boolean;
    loaded: boolean;
    selectMatiere?: Matiere;
    logs?: {
        type: string;
        message: string;
    }
}

export const MatiereListAdapter: EntityAdapter<Matiere> = createEntityAdapter<Matiere>({
    sortComparer: false
});

export const initialState: MatiereListStateEntity = MatiereListAdapter.getInitialState({
    loading: false,
    loaded: false,
    selectMatiere: undefined,
    logs: undefined
});

export const {
    selectIds: selectMatiereIds,
    selectEntities: selectMatieresEntities,
    selectAll: selectMatieres,
    selectTotal: selectTotalMatieres
} = MatiereListAdapter.getSelectors()
