import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';

import { CoursesService } from 'src/app/core/services/courses.service';
import { Courses } from 'src/app/models/courses.model';


@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.scss']
})
export class CreateFormationComponent implements OnInit {

  formationForm!:FormGroup;
  formationPreview$!: Observable<Courses>
  pdpBase64!:string
  imageSaved:boolean = false

  constructor(private formBuilder: FormBuilder ,
              private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.formationForm = this.formBuilder.group({
      title: [null],
      description:[null],
      responsible:[null],
      image: [null]
    })

    this.formationPreview$ = this.formationForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
      }))
    )
  }
  uploadImage(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          this.pdpBase64 = e.target.result;
          this.imageSaved = true
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  onSubmitFormation(){    
      this.coursesService.addCourses({
        ...this.formationForm.value,
        image:this.pdpBase64
      }).subscribe({
        next:data => console.log({data}),
        error:err => console.log({err})
      })
  }

}
