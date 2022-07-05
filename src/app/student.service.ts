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

  getStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseUrl}/student/${id}`)
  }

  updateStudent(id: number, student: Student): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/student/${id}`, student)
  }

  deleteStudent(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/student/${id}`)
  }
}
