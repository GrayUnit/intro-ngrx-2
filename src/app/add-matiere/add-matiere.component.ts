import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Matiere } from '../core/interfaces/matiere';
import { AppState } from '../core/store';
import { LoadCreateMatiereAction } from '../core/store/actions/matiere.action';

@Component({
  selector: 'app-add-matiere',
  templateUrl: './add-matiere.component.html',
  styleUrls: ['./add-matiere.component.scss']
})
export class AddMatiereComponent implements OnInit {

  public matiereForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) { 
    this.matiereForm = fb.group({
      libelle: ['', Validators.required],
      coefficient: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  public createMatiere(data: Matiere) {
    const item = {
      ...data
    };
    this.store.dispatch(LoadCreateMatiereAction({item: item}));
    this.router.navigateByUrl('/matiere');
  }

}
