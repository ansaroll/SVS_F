import { Component, OnInit , VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Information } from 'src/app/models/information.model';
import { Contact } from 'src/app/models/contact.model';
import { UserService } from 'src/app/core/services/user.service';


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


  constructor(private formBuilder: FormBuilder, private userService: UserService ) { }

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
      password:[null],
      passwordConfirmation:[null],
      email:[null],
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
    this.userService.addUser(form.value)
        // alert('hey')
    console.log(form.value);
  }

}
