import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  teachers: Teacher[];

  constructor(private teacherService: TeacherService, private router: Router) { }

  ngOnInit(): void {
    this.getTeacherList();
  }

  private getTeacherList(){
    this.teacherService.getTeacherList().subscribe(data => {
      this.teachers = data;
    })
  }

  updateTeacher(id:number){
    this.router.navigate(['/teacher/update/',id])
  }

  deleteTeacher(id:number){
    this.teacherService.deleteTeacher(id).subscribe(data => {
      this.getTeacherList();
    })
  }

}
