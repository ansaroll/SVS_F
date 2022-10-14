import { Component, OnInit , VERSION  , Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-create-doctorant',
  templateUrl: './create-doctorant.component.html',
  styleUrls: ['./create-doctorant.component.scss']
})
export class CreateDoctorantComponent implements OnInit {


  informationForm!:FormGroup;
  informationPreview$!: Observable<User>


  @Input() userSignUp:any = {
    name:'',
    password:'',
    passwordconfirm:'',
    email:'',
  }


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
      poste:[null],
      im: [null],
      role:["doctorant"]
    })



    this.informationPreview$ = this.informationForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdAt: new Date(),
      }))
    )

  }


  onSubmitprofilForm(form:FormGroup) {
    this.userService.addUser(form.value).subscribe({
      next:data => this.route.navigate(['/admin/profil' , data._id , data.role]),
    })
  }

}
