import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.css']
})
export class CreateSubjectComponent implements OnInit {

  subject: Subject = new Subject();
  constructor(private subjectService: SubjectService, private router:Router) { }

  ngOnInit(): void {
  }

  saveSubject(){
    this.subjectService.createSubject(this.subject).subscribe(data => {
      console.log("Subject Created: ",data); 
      this.router.navigate(['/subjects'])
    },
    error => console.log(error))
  }
   
  onSubmit(): void {
    this.saveSubject();
  }

}
