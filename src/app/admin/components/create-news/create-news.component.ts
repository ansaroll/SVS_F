import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { News } from 'src/app/models/news.models';
import { convert } from 'html-to-text'
import { Editor  } from 'tinymce';


@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {

  newsForm!:FormGroup;
  newsPreview$!: Observable<News>
  others!:any;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.newsForm = this.formBuilder.group({
      title: [null],
      others:[null],
      responsable:[null],
      imageUrl: [null]
    })

    this.newsPreview$ = this.newsForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
      }))
    )
  }

  onSubmitnews(){
    console.log(this.newsForm.value['others']);
    this.others = this.newsForm.value['others'];
    console.log(this.others);


  }

}
