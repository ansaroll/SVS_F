import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { Courses } from 'src/app/models/courses.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses:Partial<Courses>[] = []

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.getCoursess({}).subscribe({
      next:data => {
        this.courses = data
      },
      error:err => console.log({err})
    })
  }

}
