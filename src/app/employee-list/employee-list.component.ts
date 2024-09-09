import {Component, OnInit} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {EmployeeModel} from "../model/employee.model";
import {EmployeeService} from "../service/employee.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatIcon,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRow,
    MatRowDef
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{


  ngOnInit(): void {}

  dataSource:EmployeeModel[]=[];

  displayedColumns:string[]=[
    'employeeId',
    'employeeName',
    'employeeContactNUmber',
    'employeeAddress',
    'employeeGender',
    'employeeDepartment',
    'employeeSkills',
    'delete'
  ];
  // 'edit',


  constructor(private employeeService: EmployeeService) {
    this.getEmployeeList();
  }

  getEmployeeList(){
    this.employeeService.getEmployees().subscribe({
      next:(res:EmployeeModel[])=>{
        console.log(res);
        this.dataSource=res;
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
  }

  deleteEmployee(employeeId:number){
    console.log(employeeId);
    this.employeeService.deleteEmployee(employeeId).subscribe({
      next:(res)=>{
      console.log(res)
    },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
  }



}
