import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { MessageService } from 'src/app/core/services/message.service';
import { TokenService } from 'src/app/core/services/token.service';
import { Message } from 'src/app/models/message.model';


@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  messages:Message[] = []
  isFileSaved: boolean = false;
  fileBase64: string | undefined = undefined;

  constructor(private messageService:MessageService , private tokenService: TokenService,
              private formBuilder: FormBuilder) { }
              messageForm!:FormGroup;
  userIdConnected: string | null = null

  ngOnInit(): void {
    this.messageService.getMessages().subscribe({
      next:data => this.messages = data,
      error:err => console.log({err})
    })
    this.userIdConnected = this.tokenService.getUserIdConnected()
    this.messageForm = this.formBuilder.group({
      content: [null],
      isFile:[false]
    })
  }

  getMessages(){
    this.messageService.getMessages().subscribe({
      next:data => this.messages = data,
      error:err => console.log({err})
    })
  }


  onSendMessage(){
    this.messageService.addMessage({
      ...this.messageForm.value,
      expId: this.userIdConnected,
      isAdmin: true,
      expName: 'Admin',
    }).subscribe({
      next:() => this.getMessages(),
      error:err => console.log({err})
    })
  }

  uploadFile(fileInput: any) {
    console.log({fileInput})
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
          const fileBase64Path = e.target.result;
          this.fileBase64 = fileBase64Path;
          this.isFileSaved = true;
          this.messageService.addMessage({
            content:this.fileBase64,
            expId: this.userIdConnected,
            isAdmin: true,
            isFile:true,
            expName: 'Admin',
          }).subscribe({
            next:() => this.getMessages(),
            error:err => console.log({err})
          })
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

}
