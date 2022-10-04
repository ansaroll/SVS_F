import { Component, OnInit , VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Information } from 'src/app/models/information.model';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-doctorant',
  templateUrl: './create-doctorant.component.html',
  styleUrls: ['./create-doctorant.component.scss']
})
export class CreateDoctorantComponent implements OnInit {


  informationForm!:FormGroup;
  informationPreview$!: Observable<Information>


  constructor(private formBuilder: FormBuilder, 
              private userService: UserService,
              private route:Router ) { }

  ngOnInit(): void {

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
      telephone:[null],
      isBoursier:[null],
      tauxBourse:[null],
      about: [null],
    })



    this.informationPreview$ = this.informationForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
      }))
    )

  }


  onSubmitprofilForm(form:FormGroup) {
    this.userService.addUser(form.value).subscribe({
      next:data => this.route.navigate(['/admin/profil' , data._id , data.role]),
    })
  }

}
