import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertService } from 'src/app/core/services/advert.service';
import { Advert } from 'src/app/models/advert.model';

@Component({
  selector: 'app-advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.scss']
})
export class AdvertDetailsComponent implements OnInit {

  advert:Partial<Advert> = {}

  constructor(private advertService: AdvertService, 
              private route: ActivatedRoute ,
              ) { }

  ngOnInit(): void {
    this.advertService.getSingleAdvert(this.route.snapshot.paramMap.get('id') || '').subscribe({
      next:data => {
        this.advert = data
        console.log({data});
        
      },
      error:err => console.log({err})
    })
  }
}
