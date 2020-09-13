import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
        this.goToEmployeeList();
      }
    );
  }

  goToEmployeeList(): void {
    this.router.navigate(['/employees']);
  }

}
