import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { LoginComponent } from './login/login.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {
    path: "login", component:LoginComponent,
  },
  {
    path: "students", component:StudentListComponent
  },
  {
    path: "student/create", component:CreateStudentComponent
  },
  {
    path: "student/details/:id", component:StudentDetailsComponent
  },
  {
    path: "student/update/:id", component:UpdateStudentComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: "subjects", component:SubjectListComponent
  },
  {
    path: "subject/create", component:CreateSubjectComponent
  },
  {
    path: "teachers", component:TeacherListComponent
  },
  {
    path: "teacher/create", component:CreateTeacherComponent
  },
  {
    path: "teacher/update/:id", component:UpdateTeacherComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
