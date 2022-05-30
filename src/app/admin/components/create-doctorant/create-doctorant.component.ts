import { Component, OnInit , VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Information } from 'src/app/models/information.model';
import { Contact } from 'src/app/models/contact.model';


@Component({
  selector: 'app-create-doctorant',
  templateUrl: './create-doctorant.component.html',
  styleUrls: ['./create-doctorant.component.scss']
})
export class CreateDoctorantComponent implements OnInit {


  contactForm!:FormGroup;
  informationForm!:FormGroup;
  notificationForm!:FormGroup;
  contactPreview$!: Observable<Contact>
  informationPreview$!: Observable<Information>


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      email: [null],
      telephone:[null],
      isBoursier:[null],
      tauxBourse:[null],
      about: [null],
      imageUrl: [null]
    })

    this.informationForm = this.formBuilder.group({
      name: [null,Validators.required],
      lastName: [null],
      country: [null],
      sexe: [null],
      dtn: [null], // dtn : date de naissance
      dtbacc: [null], // dtbacc : date d'obtention bacc
      adress: [null],
      cin: [null],
      serieBacc: [null],
      codeRedoublement: [null],

    })

    this.contactPreview$ = this.contactForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
      }))
    )

    this.informationPreview$ = this.informationForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
      }))
    )

  }


  onSubmitprofilForm(form:FormGroup) {
    // alert('hey')
    console.log(form.value);
  }

}
