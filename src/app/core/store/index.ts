import { MatiereListEffects } from "./effects/matiere.effect";
import { MatiereListStateEntity } from "./entities/matiere.entity";
import { matiereReducer } from "./reducers/matiere.reducer";



export interface AppState {
    matieres: MatiereListStateEntity
}

export const rootReducer = {
    matieres: matiereReducer
};

export const appEffects = [MatiereListEffects]