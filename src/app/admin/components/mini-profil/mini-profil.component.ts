import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-mini-profil',
  templateUrl: './mini-profil.component.html',
  styleUrls: ['./mini-profil.component.scss']
})
export class MiniProfilComponent implements OnInit {

  @Input() user:Partial<User> = {}

  constructor() { }

  ngOnInit(): void {
  }

}
