import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Formation } from 'src/app/models/formation.model';
import { convert } from 'html-to-text'
import { Editor  } from 'tinymce';


@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.scss']
})
export class CreateFormationComponent implements OnInit {

  formationForm!:FormGroup;
  formationPreview$!: Observable<Formation>
  others!:any;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formationForm = this.formBuilder.group({
      title: [null],
      others:[null],
      responsable:[null],
      imageUrl: [null]
    })

    this.formationPreview$ = this.formationForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
      }))
    )
  }

  onSubmitFormation(){
    console.log(this.formationForm.value['others']);
    this.others = this.formationForm.value['others'];
    console.log(this.others);


  }

}
