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
  idToDelete?:string = ''
  showModal?:boolean = false

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.getAllCourses()
  }

  setDeleteCourse(id:string):void{
    this.idToDelete = id
    this.showModal = true
  }

  onCancelDelete():void {
    this.showModal = false
    this.idToDelete = undefined
  }

  getAllCourses(){
    this.coursesService.getCoursess({enabled:true}).subscribe({
      next:data => {
        this.courses = data
      },
      error:err => console.log({err})
    })
  }

  onDeleteCourse():void{
    this.coursesService.deleteCourses(this.idToDelete).subscribe({
      next:data => {
        console.log({data})
        this.showModal = false
        this.idToDelete = undefined
        this.getAllCourses()
      } ,
      error:err => console.log({err})
    })
  }

}
