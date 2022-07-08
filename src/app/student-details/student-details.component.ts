import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Subject } from '../subject';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student: Student;
  teachers: Teacher[] = [];
  studentSubjects: Subject[] = [];
  studentTeachers: Teacher[] = [];

  constructor( private route: ActivatedRoute ,private studentService: StudentService, private teacherService: TeacherService) { }

  
  ngOnInit(): void {

    this.student = new Student();

    this.teacherService.getTeacherList().subscribe(data => {
      this.teachers = data;
    })

    this.studentService.getStudentById(this.route.snapshot.params['id']).subscribe( data => {
      
      this.student = data;

      this.studentService.getStudentSubjects(this.student.grade).subscribe( data => {
        this.studentSubjects = data;

        this.teachers.filter( (teacher:any) => teacher.subjects.forEach(  (subject:any) => {
          this.studentSubjects.forEach( (studentSubject:any) =>{
            console.log(subject.id);
            console.log(studentSubject.id);
            if(subject.id==studentSubject.id){
              this.studentTeachers.push(teacher);
              console.log(this.studentTeachers);
              
            }
          })
        }))
      })
    })

  }

}
