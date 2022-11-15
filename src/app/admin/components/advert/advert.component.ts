import { Component, OnInit } from '@angular/core';
import { AdvertService } from 'src/app/core/services/advert.service';
import { Advert } from 'src/app/models/advert.model';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent implements OnInit {

  advert:Partial<Advert>[] = []
  idToDelete?:string = ''
  showModal?:boolean = false

  constructor(private advertService: AdvertService) { }

  ngOnInit(): void {
    this.getAllAdvert()
  }

  setDeleteCourse(id:string):void{
    this.idToDelete = id
    this.showModal = true
  }

  onCancelDelete():void {
    this.showModal = false
    this.idToDelete = undefined
  }

  getAllAdvert(){
    this.advertService.getAdverts({}).subscribe({
      next:data => {
        this.advert = data
      },
      error:err => console.log({err})
    })
  }

  onDeleteCourse():void{
    this.advertService.deleteAdvert(this.idToDelete).subscribe({
      next:data => {
        console.log({data})
        this.showModal = false
        this.idToDelete = undefined
        this.getAllAdvert()
      } ,
      error:err => console.log({err})
    })
  }

}
