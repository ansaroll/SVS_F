import { Component, OnInit , VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Information } from 'src/app/models/information.model';
import { Profil } from 'src/app/models/profil.model';


@Component({
  selector: 'app-create-doctorant',
  templateUrl: './create-doctorant.component.html',
  styleUrls: ['./create-doctorant.component.scss']
})
export class CreateDoctorantComponent implements OnInit {


  profilForm!:FormGroup;
  informationForm!:FormGroup;
  notificationForm!:FormGroup;
  profilPreview$!: Observable<Profil>
  informationPreview$!: Observable<Information>


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.profilForm = this.formBuilder.group({
      email: [null],
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

    this.profilPreview$ = this.profilForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        name: 'son Nom',
        id: 0,
        location: 'myLocation'
      }))
    )

    this.informationPreview$ = this.informationForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
      }))
    )

  }


  onSubmitprofilForm() {
    console.log(this.profilForm.value);
  }
}
