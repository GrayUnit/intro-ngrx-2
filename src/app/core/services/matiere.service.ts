import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Matiere } from '../interfaces/matiere';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(
    private http: HttpClient
  ) { }

  public getMatieres(): Observable<Matiere[]> {
    return this.http.get<Matiere[]>(`${environment.apiUrl}/matieres`);
  }

  public createMatiere(matiere: Matiere): Observable<Matiere> {
    return this.http.post<Matiere>(`${environment.apiUrl}/matieres`, matiere);
  }

  public deleteMatiere(id: number): Observable<number> {
    return this.http.delete<Matiere>(`${environment.apiUrl}/matieres/${id}`)
    .pipe(
      map(reponse => id)
    );
  }
}
