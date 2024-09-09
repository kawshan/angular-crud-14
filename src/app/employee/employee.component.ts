import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatOption, MatSelect} from "@angular/material/select";
import {FormsModule, NgForm} from "@angular/forms";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatDivider} from "@angular/material/divider";
import {EmployeeModel} from "../model/employee.model";
import {EmployeeService} from "../service/employee.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    MatFormField,
    MatInput,
    MatIcon,
    MatSelect,
    MatOption,
    FormsModule,
    MatRadioGroup,
    MatRadioButton,
    MatCheckbox,
    MatDivider,
    MatLabel
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{


  constructor(private employeeService:EmployeeService) {}

  skills:string[]=[];

  ngOnInit(): void {}

  employee:EmployeeModel={
    employeeAddress: "",
    employeeContactNUmber: "",
    employeeDepartment: "",
    employeeGender: "",
    employeeId: 0,
    employeeName: "",
    employeeSkills: ""
  }

  saveEmployee(employeeForm:NgForm){
   this.employeeService.saveEmployee(this.employee).subscribe({
     next:(res:EmployeeModel)=>{
       console.log(res);
       employeeForm.reset();
       this.employee.employeeGender="";
       this.employee.employeeSkills="";
       this.skills=[];
     },
     error:(err:HttpErrorResponse)=>{
       console.log(err);
     }
   })
  }

  selectGender(gender:string){
    this.employee.employeeGender=gender;
  }


  onSkillsChanges(event:any){
    if (event.checked){
      this.skills.push(event.source.value)
    }else {
      this.skills.forEach((item,index)=>{
        if (item==event.source.value){
          this.skills.splice(index,1);
        }
      })
    }
    this.employee.employeeSkills=this.skills.toString();
  }


}
