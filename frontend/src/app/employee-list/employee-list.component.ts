import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(): void {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  private deleteEmployee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(data => {
      this.getEmployees();
      this.goToEmployeeList();
    });
  }

  private updateEmployee(employeeId: number) {
    this.router.navigate(['/update-employee', employeeId]);
  }

  goToEmployeeList(): void {
    this.router.navigate(['/employees']);
  }
}
