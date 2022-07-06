import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

  teacher: Teacher = new Teacher();
  subjects: Subject[] = new Array<Subject>();
  teacherSubjects: Subject[] = new Array<Subject>();
  constructor(private teacherService: TeacherService,private subjectService: SubjectService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.teacherService.getTeacherById(this.route.snapshot.params['id']).subscribe(data => {
      this.teacher = data;
      this.teacherSubjects = this.teacher.subjects
    }, err => {
      console.log(err);
    }
    )
    this.subjectService.getSubjectList().subscribe(data => {
      this.subjects = data;
    })
  }

  addSubject(key:number) {
    this.teacherSubjects.push(this.subjects[key]);
  }
   
  onSubmit(){
    this.teacher.subjects=this.teacherSubjects;
    this.teacherService.updateTeacher(this.route.snapshot.params['id'],this.teacher).subscribe(data =>{
      this.router.navigate(['/teachers']);
    }, err=>{
      console.log(err);
      
    })
  }
}
