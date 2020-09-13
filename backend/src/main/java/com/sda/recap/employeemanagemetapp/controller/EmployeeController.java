package com.sda.recap.employeemanagemetapp.controller;

import com.sda.recap.employeemanagemetapp.exception.EmployeeNotFoundException;
import com.sda.recap.employeemanagemetapp.model.Employee;
import com.sda.recap.employeemanagemetapp.repository.EmployeeRepository;
import java.util.List;
import java.util.MissingResourceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

  EmployeeRepository employeeRepository;

  @Autowired
  public EmployeeController(EmployeeRepository employeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  @GetMapping("/employees")
  public List<Employee> getEmployeesList() {
    return employeeRepository.findAll();
  }

  @GetMapping("/employees/{id}")
  public Employee getEmployee(@PathVariable Long id) {
    return employeeRepository.findById(id)
      .orElseThrow(EmployeeNotFoundException::new);
  }

  @PostMapping("/employees")
  public void addEmployee(@RequestBody Employee employee) {
    employeeRepository.save(employee);
  }

  @DeleteMapping("/employees/{id}")
  public void deleteEmployee(@PathVariable Long id) {
    if (getEmployee(id) == null) {
      throw new EmployeeNotFoundException();
    }else{
      employeeRepository.deleteById(id);
    }
  }

  @PutMapping("/employees/{id}")
  public void updateEmployee(@PathVariable Long id, @RequestBody Employee newEmployee) {
    Employee oldEmployee = getEmployee(id);
    if (oldEmployee != null) {
      employeeRepository.delete(oldEmployee);
      employeeRepository.save(newEmployee);
    } else {
      throw new EmployeeNotFoundException();
    }
  }
}


