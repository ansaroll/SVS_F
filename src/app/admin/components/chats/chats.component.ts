import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { MessageService } from 'src/app/core/services/message.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  constructor(private messageService:MessageService , private tokenService: TokenService,
              private formBuilder: FormBuilder) { }
              messageForm!:FormGroup;
  userIdConnected: string | null = null

  ngOnInit(): void { 
    this.userIdConnected = this.tokenService.getUserIdConnected()
    this.messageForm = this.formBuilder.group({
      content: [null],
    })
  }


  onSendMessage(){
    this.messageService.addMessage({
      ...this.messageForm.value,
      expId: this.userIdConnected,
      isAdmin: true,
      expName: 'Admin',
    }).subscribe({
      next:data => console.log({data}),
      error:err => console.log({err})
    })
  }

}
