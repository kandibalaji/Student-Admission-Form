import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employeeservice.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  employee: Employee = { id: 0, name: '', designation: '', salary: 0 };
  isEdit = false;


  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(() => {
        this.resetForm();
        this.loadEmployees();
      });
    } else {
      this.employeeService.createEmployee(this.employee).subscribe(() => {
        this.resetForm();
        this.loadEmployees();
      });
    }
  }

  onEdit(employee: Employee): void {
    this.isEdit = true;
    this.employee = { ...employee };
  }

  onDelete(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }

  resetForm(): void {
    this.isEdit = false;
    this.employee = { id: 0, name: '', designation: '', salary: 0 };
  }
}
