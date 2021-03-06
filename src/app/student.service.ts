import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';
import { Subject } from './subject';
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://localhost:8080/api/v1"
  
  constructor(private httpClient: HttpClient) { }

  getStudentList(){
    return this.httpClient.get(this.baseUrl+'/student/all');
  }

  createStudent(student: Student): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/student/create`,student)
  }

  getStudentSubjects(grade: number): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(this.baseUrl+'/subjectbygrade/' + grade);
  }

  getStudentByGrade(grade: number): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseUrl+'/studentbygrade/' + grade);
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
