import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from './subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private baseUrl = "http://localhost:8080/api/v1"
  constructor(private httpClient: HttpClient) { }

  getSubjectList(): Observable<Subject[]>{
    return this.httpClient.get<Subject[]>(`${this.baseUrl}/subject/all`)
  }

  createSubject(subject: Subject): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/subject/create`,subject)
  }

  getSubjectById(id: number): Observable<Subject>{
    return this.httpClient.get<Subject>(`${this.baseUrl}/subject/${id}`)
  }

  deleteSubject(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/subject/${id}`)
  }
}
