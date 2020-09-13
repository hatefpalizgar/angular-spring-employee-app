import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = 'http://localhost:8080/api/v1/employees';

  constructor(private httpClient: HttpClient) {
  }

  // Read
  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  // Create
  createEmployee(employee: Employee): Observable<Employee[]> {
    return this.httpClient.post<Employee[]>(`${this.baseURL}`, employee);
  }

//  Update
  updateEmployee(employeeId: number, newEmployee: Employee) {
    return this.httpClient.put<Employee[]>(`${this.baseURL}/${employeeId}`, newEmployee);
  }

//  Delete
  deleteEmployee(employeeId: number): Observable<Employee[]> {
    return this.httpClient.delete<Employee[]>(`${this.baseURL}/${employeeId}`);
  }

  getEmployeeById(employeeId: number) {
    return this.httpClient.get<Employee>(`${this.baseURL}/${employeeId}`);
  }
}
