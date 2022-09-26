import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Information } from 'src/app/models/information.model';
import { Contact } from 'src/app/models/contact.model';
import { DoctorantService } from 'src/app/core/services/doctorant/doctorant.service';
import { Doctorant } from 'src/app/models/doctorant/doctorant.model';

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

  constructor(private formBuilder: FormBuilder , private doctorantService:DoctorantService) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      email: [null],
      telephone:[null],
      isBoursier:[null],
      tauxBourse:[null],
      about: [null],
      imageUrl: [null]
    })

    this.informationForm  = this.formBuilder.group({
      name: [null],
      firstName: [null],
      nationality: [null],
      gender: [null],
      dateofBirth : [null],
      yearBacc: [null],
      adress: [null],
      cin:[null],
      serieBacc:[null],
      codeDoubling:[null],
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
    this.doctorantService.addDoctorant(form.value)
    console.log(form.value);
  }

}
