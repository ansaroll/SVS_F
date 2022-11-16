import { Component, OnInit } from '@angular/core';
import { AdvertService } from 'src/app/core/services/advert.service';
import { CoursesService } from 'src/app/core/services/courses.service';
import { Advert } from 'src/app/models/advert.model';
import { Courses } from 'src/app/models/courses.model';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent implements OnInit {


  adverts:Partial<Advert>[] = []

  constructor(private advertService: AdvertService) { }

  ngOnInit(): void {
    this.advertService.getAdverts({enabled:true}).subscribe({
      next:data => {
        this.adverts = data
        console.log({data});
        
      },
      error:err => console.log({err})
    })
  }

}
