import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    setTimeout(() =>{ this.tokenService.clearToken()},500)
  }

}
