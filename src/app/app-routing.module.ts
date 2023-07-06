import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { SudentListComponent } from './sudent-list/sudent-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';



const routes: Routes = [
  { path: 'students', component: SudentListComponent },
  { path: 'create-student', component: CreateStudentComponent },
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'student-details/:id', component: StudentDetailsComponent },
  { path: 'search-student', component: SearchStudentComponent },
  { path: 'update-student/:id', component: UpdateStudentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
