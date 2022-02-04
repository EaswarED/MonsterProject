import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../employees/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  // basePath: string = 'employees';
  get apiUrl(): string {
    return environment.apiUrl;
  }
  constructor(private http: HttpClient) {}

  getList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/students`);
  }
}
