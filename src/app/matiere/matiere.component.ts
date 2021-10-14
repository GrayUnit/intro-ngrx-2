import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Matiere } from '../core/interfaces/matiere';
import { AppState } from '../core/store';
import { LoadDeleteMatiereAction, LoadInitMatiereAction } from '../core/store/actions/matiere.action';
import { selectMatiereListEntities$, selectMatiereLoading$ } from '../core/store/selectors/matiere.selector';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss']
})
export class MatiereComponent implements OnInit {

  public matieres$!: Observable<Matiere[]>;
  public matieresLoading$!: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { 
    this.matieres$ = this.store.pipe(
      select(selectMatiereListEntities$)
    );
    this.matieresLoading$ = store.pipe(select(selectMatiereLoading$));
  }

  ngOnInit(): void {
    this.store.dispatch(LoadInitMatiereAction());
  }

  goToAddMatiere(): void {
    this.router.navigateByUrl('/add-matiere');
  }

  deleteMatiere(id: number) {
    this.store.dispatch(LoadDeleteMatiereAction({id: id}));
  }

}
