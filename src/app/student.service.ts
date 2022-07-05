import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://localhost:8080/api/v1"
  constructor(private httpClient: HttpClient) { }

  getStudentList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseUrl}/student/all`)
  }

  createStudent(student: Student): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/student/create`,student)
  }
}
