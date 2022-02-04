import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeApiService } from 'src/app/api/employee.api.service';
import { takeWhile } from 'rxjs/operators';
import { Employee } from 'src/app/employees/employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  private alive: boolean = true;
  employeeList: Employee[] | any;
  constructor(private employeeApiService: EmployeeApiService) {}
  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit(): void {
    this.getEmployessList();
  }
  getEmployessList(): void {
    this.employeeApiService
      .getList()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.employeeList = data;
      });
  }
}
