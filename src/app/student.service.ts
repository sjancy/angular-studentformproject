import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL = "http://localhost:8080/api/v1/student";
  private baseURL1 = "http://localhost:8080/api/v1/studentbyname";
  private baseURL2 = "http://localhost:8080/api/v1/studentbyid";

  constructor(private httpClient: HttpClient) { }

  getStudentList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseURL);
  }
  createStudent(student: Student): Observable<object> {
    return this.httpClient.post(this.baseURL, student);
  }

  getStudentById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(this.baseURL + '/' + id);
  }

  updateStudent(id: number, student: Student): Observable<object> {
    return this.httpClient.put(this.baseURL + '/' + id, student);
  }

  deleteStudent(id: number): Observable<object> {
    return this.httpClient.delete(this.baseURL + '/' + id);
  }

  getStudentByName(name: String): Observable<Student> {
    console.log('calling ' + this.baseURL1 + '/' + name);
    return this.httpClient.get<Student>(this.baseURL1 + '/' + name);
  }

  getStudentSearchById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(this.baseURL2 + '/' + id);

  }

}
