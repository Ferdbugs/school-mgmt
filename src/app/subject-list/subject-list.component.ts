import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  subjects: Subject[];

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.getSubjectList();
  }

  private getSubjectList(){
    this.subjectService.getSubjectList().subscribe(data => {
      this.subjects = data;
    })
  }

  deleteSubject(id:number){
    this.subjectService.deleteSubject(id).subscribe(data => {
      this.getSubjectList();
    })
  }

}
