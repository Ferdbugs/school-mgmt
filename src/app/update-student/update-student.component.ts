import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student: Student = new Student();
  time: string = "";
  constructor(private studentService: StudentService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.studentService.getStudentById(this.route.snapshot.params['id']).subscribe(data => {
      this.student = data;
    }, err => {
      console.log(err);
    }
    )
    
    this.time = new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true });
  }

  onSubmit(){

    if(this.student.type=="external" && this.time!="12 AM"){
      window.alert("Sorry, this student's details can only be updated at 12 AM.")
    }
    else {
      this.studentService.updateStudent(this.route.snapshot.params['id'],this.student).subscribe(data =>{
        this.router.navigate(['/students']);
      }, err=>{
        console.log(err);
        
      })
    }
  }

}
