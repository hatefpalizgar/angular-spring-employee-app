package com.sda.recap.employeemanagemetapp.exception;

public class EmployeeNotFoundException extends RuntimeException {

  public EmployeeNotFoundException() {
    super("Employee not found");
  }
}
