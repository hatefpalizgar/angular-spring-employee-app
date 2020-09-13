import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeId: number;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.employeeId).subscribe(data => {
      this.employee = data;
    });
  }

  onSubmit(): void {
    this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe(data => {
        this.goToEmployeeList();
      }
    );
  }

  goToEmployeeList(): void {
    this.router.navigate(['/employees']);
  }

}

