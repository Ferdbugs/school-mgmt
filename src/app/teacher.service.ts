import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseUrl = "http://localhost:8080/api/v1"
  constructor(private httpClient: HttpClient) { }

  getTeacherList(): Observable<Teacher[]>{
    return this.httpClient.get<Teacher[]>(`${this.baseUrl}/teacher/all`)
  }

  createTeacher(teacher: Teacher): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/teacher/create`,teacher)
  }

  getTeacherById(id: number): Observable<Teacher>{
    return this.httpClient.get<Teacher>(`${this.baseUrl}/teacher/${id}`)
  }

  updateTeacher(id: number, teacher: Teacher): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/teacher/${id}`, teacher)
  }

  deleteTeacher(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/teacher/${id}`)
  }
}
