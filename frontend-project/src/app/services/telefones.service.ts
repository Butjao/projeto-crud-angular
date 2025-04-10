import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Telefone } from '../model/telefone';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelefonesService {
  private apiUrl = "http://localhost:8000/api/telefone";

  constructor(private httpClient: HttpClient) {}

  createTelephone(telefone: Telefone): Observable<Telefone> {
    const url = `${this.apiUrl}/store`;
    return this.httpClient.post<Telefone>(url, telefone);
  }

  getTelephone(): Observable<Telefone[]> {
    const url = `${this.apiUrl}/get`;
    return this.httpClient.get<Telefone[]>(url);
  }

  getTelephoneById(id: Number): Observable<Telefone> {
    const url = `${this.apiUrl}/getBy/${id}`;
    return this.httpClient.get<Telefone>(url);
  }

  updateTelephone(telefone: Telefone): Observable<Telefone> {
    const url = `${this.apiUrl}/update/${telefone.id}`;
    return this.httpClient.put<Telefone>(url, telefone);
  }

  deleteTelephone(id: Number): Observable<void> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.httpClient.delete<void>(url);
  }
}