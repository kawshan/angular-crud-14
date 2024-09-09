import { Routes } from '@angular/router';
import {EmployeeComponent} from "./employee/employee.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";

export const routes: Routes = [
  {path:"employee",component:EmployeeComponent},
  {path:"employee-list",component:EmployeeListComponent},
];
