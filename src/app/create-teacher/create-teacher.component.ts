import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {

  teacher: Teacher = new Teacher();
  subjects: Subject[] = new Array<Subject>();
  teacherSubjects: Subject[] = new Array<Subject>();
  
  constructor(private teacherService: TeacherService,private subjectService: SubjectService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.subjectService.getSubjectList().subscribe(data => {
      this.subjects = data;
    })
  }

  saveTeacher(){
    this.teacher.subjects=this.teacherSubjects;
    this.teacherService.createTeacher(this.teacher).subscribe(data => {
      console.log("Teacher Created: ",data); 
      this.router.navigate(['/teachers'])
    },
    error => console.log(error))
  }

  removeSubject(key:number){
    this.teacherSubjects.splice(key,1)
  }

  addSubject(key:number) {
    this.teacherSubjects.push(this.subjects[key]);
  }
   
  onSubmit(): void {
    this.saveTeacher();
  }

}
