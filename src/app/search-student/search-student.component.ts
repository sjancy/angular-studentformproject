import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

  name: String;
  id: number;
  student: Student = new Student();
  constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }

  searchstudent() {
    this.name = this.student.name;
    this.studentService.getStudentByName(this.name).subscribe(data => {
      console.log(data);
      this.student = data;
      this.goToSearchList();
    },
      error => console.log(error));
  }


  goToSearchList() {
    console.log('routing to: ' + '/student-details/' + this.student.id)
    this.router.navigate(['/student-details/' + this.student.id]);
  }

  onSubmit() {
    console.log(this.student.name);
    this.searchstudent();
    this.searchstudentbyid(this.id);

  }

  searchstudentbyid(id: number) {
    console.log("searchstudentbyid" + id)
    this.id = this.student.id;

    this.studentService.getStudentSearchById(this.id).subscribe(data => {
      console.log(data);
      this.goToSearchList();
    })

  }
}
