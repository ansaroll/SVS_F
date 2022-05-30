import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Information } from 'src/app/models/information.model';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

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
      name: [null],
      lastName: [null],
      email: [null],
      city: [null],
      postal: [null],
      streetadress: [null],
      province: [null],
      country: [null],
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
