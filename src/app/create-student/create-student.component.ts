import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  constructor(private studentService: StudentService, private router:Router) { }

  ngOnInit(): void {
  }

  saveStudent(){
    this.studentService.createStudent(this.student).subscribe(data => {
      console.log("Student Created: ",data); 
      this.router.navigate(['/students'])
    },
    error => console.log(error))
  }
   
  onSubmit(): void {
    this.saveStudent();
  }

}
