import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AdvertService } from 'src/app/core/services/advert.service';
import { Advert } from 'src/app/models/advert.model';


@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.component.html',
  styleUrls: ['./create-advert.component.scss']
})
export class CreateAdvertComponent implements OnInit {

  formationForm!:FormGroup;
  formationPreview$!: Observable<Advert>
  pdpBase64!:string
  imageSaved:boolean = false
  isUpdate:boolean = false


  constructor(private formBuilder: FormBuilder ,
              private coursesService: AdvertService,
              private route: ActivatedRoute ,
              private router:Router
              ) { }

  ngOnInit(): void {
    this.formationForm = this.formBuilder.group({
      title: [null],
      description:[null],
      responsible:[null],
      image: [null],
      enabled: false
    })
    if(this.route.snapshot.paramMap.get('id') != null) {
      this.isUpdate = true
      this.coursesService.getSingleAdvert(this.route.snapshot.paramMap.get('id')).subscribe({
        next:data => {
          this.formationForm.setValue({
            title:data.title || '',
            description:data.description || '',
            responsible:data.responsible || '',
            image:data.image || '',
            enabled:data.enabled || false
          }),
          this.imageSaved = data.image != undefined,
          this.pdpBase64 = data.image || ''
        } ,
        error:err => console.log({err})
      })

    }

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
      this.coursesService.addAdvert({
        ...this.formationForm.value,
        image:this.pdpBase64
      }).subscribe({
        next:() =>  this.router.navigateByUrl('/admin/advert'),
        error:err => console.log({err})
      })
  }

  onUpdateFormation(){
    this.coursesService.updateAdvert({
      ...this.formationForm.value,
      image:this.pdpBase64,
      _id:this.route.snapshot.paramMap.get('id')
    }).subscribe({
      next:() =>  this.router.navigateByUrl('/admin/advert'),
      error:err => console.log({err})
    })
}

}
