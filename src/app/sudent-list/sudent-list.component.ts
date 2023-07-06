import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student'
import { StudentService } from '../student.service'
@Component({
  selector: 'app-sudent-list',
  templateUrl: './sudent-list.component.html',
  styleUrls: ['./sudent-list.component.css']
})
export class SudentListComponent implements OnInit {

  students: Student[];
  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getStudent();
  }
  private getStudent() {
    this.studentService.getStudentList().subscribe(data => {
      this.students = data;
    });
  }
  updateStudent(id: number) {
    this.router.navigate(['update-student', id]);
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(data => {
      console.log(data);
      this.getStudent();
    });
  }

  studentDetails(id: number) {
    this.router.navigate(['student-details', id]);
  }

}
