import { Component, OnInit, VERSION, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { TokenService } from 'src/app/core/services/token.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  userId: string | null = null
  role: string | null = null
  isUpdate: boolean = false

  informationForm!: FormGroup;
  informationPreview$!: Observable<User>


  @Input() userSignUp: any = {
    name: '',
    password: '',
    passwordconfirm: '',
    email: '',
  }


  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    // this.userId = this.route.snapshot.paramMap.get('id')
    // this.role = this.route.snapshot.paramMap.get('role')

    this.userId =  this.tokenService.getUserIdConnected()

    this.informationForm = this.formBuilder.group({
      name: [null],
      firstName: [null],
      nationality: [null],
      gender: [null],
      dateOfBirth: [null],
      yearBacc: [null],
      adress: [null],
      cin: [null],
      serieBacc: [null],
      codeDoubling: [null],
      password: [null],
      passwordConfirmation: [null],
      email: [null],
      telephone: [null],
      isBoursier: [null],
      tauxBourse: [null],
      about: [null],
      poste: [null],
      im: [null],
      role: ["doctorant"]
    })

    if (this.userId) {
      this.isUpdate = true
      this.userService.getSingleUser(this.userId).subscribe({
        next: data => {
          this.informationForm.setValue({
            name: data.name || '',
            firstName: data.firstName || '',
            nationality: data.nationality || '',
            gender: data.gender || '',
            dateOfBirth: data.dateOfBirth || '',
            yearBacc: data.yearBacc || '1000',
            adress: data.adress || '',
            cin: data.cin || '',
            serieBacc: data.serieBacc || '',
            codeDoubling: data.codeDoubling || '',
            password: '',
            passwordConfirmation: '',
            email: data.email || '',
            telephone: data.telephone || '',
            isBoursier:data.isBoursier ? 'true' : 'false',
            tauxBourse: data.tauxBourse || 0,
            about: data.about || '',
            poste: data.poste || '',
            im: data.im || '',
            role: data.role || '',
          })
        },
        error: err => console.log({ err })
      })

    }





    this.informationPreview$ = this.informationForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdAt: new Date(),
      }))
    )

  }


  onSubmitprofilForm(form: FormGroup) {
    this.userService.addUser(form.value).subscribe({
      next: data => this.router.navigate(['/doctorant/profil']),
    })
  }

  onUpdateProfil(form:FormGroup){
    this.userService.updateUser(this.route.snapshot.paramMap.get('id'),form.value).subscribe({
      next: data => this.router.navigate(['/doctorant/profil']),
    })
  }

}
