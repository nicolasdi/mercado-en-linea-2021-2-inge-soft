import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ingreso } from '../interfaces/ingreso';
import { Usuario } from '../interfaces/usuario';
import { USUARIOS } from './mock-usuarios';

@Injectable()
export class UsuarioService {
  private apiServerURL = 'http://localhost:8080/mercado-en-linea';

  constructor(private http: HttpClient) {}

  addUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiServerURL}/new_user/`, usuario);
  }

  getUsuarioIngreso(datos: Ingreso): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiServerURL}/login/`, datos);
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiServerURL}/user/?id=${id}`);
  }
}
