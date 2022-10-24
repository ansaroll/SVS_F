import { HttpClient } from '@angular/common/http';
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
  file!:any
  fileName:string = ''

  constructor(private messageService:MessageService , private tokenService: TokenService,
              private formBuilder: FormBuilder , private http:HttpClient) { }
              messageForm!:FormGroup;
  userIdConnected: string | undefined = undefined

  ngOnInit(): void {
    this.messageService.getMessages().subscribe({
      next:data => this.messages = data,
      error:err => console.log({err})
    })
    this.userIdConnected = this.tokenService.getUserIdConnected() || 'Admin'
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


  selectFile(event:any){
    const file = event.target.files[0]
    this.file = file
    this.isFileSaved = true
    this.fileName = file.name
    console.log({file})
  }

  onSubmit(){
    const formData = new FormData()
    formData.append('file' , this.file)
    formData.append('expName' , 'Admin')
    formData.append('isAdmin' , 'true')
    formData.append('isFile' , 'true')
    formData.append('expId' , this.userIdConnected!)
    this.http.post<any>("http://localhost:1337/api/files", formData).subscribe({
      next:() => {
        this.getMessages(),
        this.isFileSaved = false
        this.messageForm.setValue({})
      },
      error:err => console.log({err})
    })
  }

  onDeleteMessage(_id:string){
    this.messageService.deleteMessage(_id).subscribe({
      next:() => this.getMessages(),
      error:() => this.getMessages()
    })
  }

}
