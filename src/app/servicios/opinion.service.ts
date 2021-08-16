import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Opinion } from '../interfaces/opinion';

@Injectable()
export class OpinionService {
  private apiServerURL = 'http://localhost:8080/mercado-en-linea';
  constructor(private http: HttpClient) {}

  // Solicitamos al backend agregar la opinion
  addOpinion(opinion: Opinion): Observable<boolean> {
    return this.http.post<boolean>(
      `${this.apiServerURL}/post_opinion/`,
      opinion
    );
  }

  // Solicitamos al backend las opiniones con llave foreana fk
  getOpiniones(fk: number): Observable<Opinion[]> {
    return this.http.get<Opinion[]>(
      `${this.apiServerURL}/opinions_by_product/?fk=${fk}`
    );
  }
}
