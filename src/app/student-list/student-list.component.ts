import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[];

  constructor(private studentService: StudentService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    // this.loginService.login("joe","1234");
    this.getStudentList();
  }

  private getStudentList(){
    this.studentService.getStudentList().subscribe(data => {
      console.log(data);
      
    })
  }

  updateStudent(id:number){
    this.router.navigate(['/student/update/',id])
  }

  deleteStudent(id:number){
    this.studentService.deleteStudent(id).subscribe(data => {
      this.getStudentList();
    })
  }

}
