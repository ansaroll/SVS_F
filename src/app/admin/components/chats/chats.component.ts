import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { MessageService } from 'src/app/core/services/message.service';
import { StatsService } from 'src/app/core/services/stats.service';
import { TokenService } from 'src/app/core/services/token.service';
import { UserService } from 'src/app/core/services/user.service';
import { Message } from 'src/app/models/message.model';
import { User } from 'src/app/models/user.model';



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
  idToDelete?:string = ''
  showModal?:boolean = false
  statsMessages:any = {}
  users:Partial<User>[] = []
  staffs:Partial<User>[] = []
  currentUser:Partial<User> = {}

  stats:{
    coursesCount: number;
    doctorantCount: number;
    profCount: number;
    staffCount: number;
} = {
  coursesCount: 0,
  doctorantCount: 0,
  profCount: 0,
  staffCount: 0
}



  constructor(private messageService:MessageService , private tokenService: TokenService,
              private formBuilder: FormBuilder , private http:HttpClient,
              private statsService:StatsService, private userService:UserService
              ) { }
              messageForm!:FormGroup;
  userIdConnected: string | undefined = undefined
  userNameConnected: string | undefined = undefined


  ngOnInit(): void {
    this.getMessages()
    this.getStatsMessages()
    this.getAllDoctorants()
    this.getAllStaffs()
    this.userIdConnected = this.tokenService.getUserIdConnected() || 'Admin'
    this.userNameConnected = this.tokenService.getUserNameConnected() || 'Admin'
    this.statsService.getStats().subscribe({next:data => this.stats = data , error:err => console.log({err})})
    this.messageForm = this.formBuilder.group({
      content: [''],
      isFile:[false]
    })
  }

  getMessages(){
    this.messageService.getMessages().subscribe({
      next:data => this.messages = data,
      error:err => console.log({err})
    })
  }

  getStatsMessages(){
    this.statsService.getStatsMessages().subscribe({
      next:data => this.statsMessages = data,
      error:err => console.log({err})
    })
  }

  setDeleteMessage(id:string):void{
    this.idToDelete = id
    this.showModal = true
  }

  onCancelDelete():void {
    this.showModal = false
    this.idToDelete = undefined
  }

  onSendMessage(){
    this.messageService.addMessage({
      ...this.messageForm.value,
      expId: this.userIdConnected,
      isAdmin: true,
      expName:this.userNameConnected ||'Admin',
    }).subscribe({
      next:() => {
        this.getMessages()
        this.getStatsMessages()
        this.messageForm.setValue({
          content:''
        })
      },
      error:err => console.log({err})
    })
  }


  selectFile(event:any){
    const file = event.target.files[0]
    this.file = file
    this.isFileSaved = true
    this.fileName = file.name
    this.messageForm.setValue({
      content:file.name || 'ok'
    })
  }

  onSubmit(){
    const formData = new FormData()
    formData.append('file' , this.file)
    formData.append('expName' , this.userNameConnected || 'Admin')
    formData.append('isAdmin' , 'true')
    formData.append('isFile' , 'true')
    formData.append('expId' , this.userIdConnected!)
    this.http.post<any>("http://localhost:1337/api/files", formData).subscribe({
      next:() => {
        this.getMessages(),
        this.getStatsMessages()
        this.isFileSaved = false
        this.messageForm.setValue({
          content:''
        })
      },
      error:err => console.log({err})
    })
  }

  onDeleteMessage(){
    this.messageService.deleteMessage(this.idToDelete).subscribe({
      next:() => {
        this.getMessages()
        this.showModal = false
        this.idToDelete = undefined
      },
      error:() => this.getMessages()
    })
  }

  getAllDoctorants(){
    this.userService.getUsers({role:'doctorant'}).subscribe({next:data => {
      this.users = data
      this.currentUser = data[0]
    } , error: err => console.log({err})})
  }

  getAllStaffs(){
    this.userService.getUsers({role:'admin'}).subscribe({next:data => {
      this.staffs = data
    } , error: err => console.log({err})})
  }

  icon(str:string):string{
    console.log(str ,  str.split('.') , str.split('.')[1])
    if(str.split('.').pop() == 'pdf') return 'fa-file-pdf text-red-400'
    if(str.split('.').pop() == 'pptx') return 'fa-file-powerpoint text-red-800'
    if((str.split('.').pop() == 'doc') || (str.split('.').pop() == 'docx')) return 'fa-file-word text-blue-700'
    if((str.split('.').pop() == 'jpg') || (str.split('.').pop() == 'png') || (str.split('.').pop() == 'jpeg')) return 'fa-file-image text-blue-300'
    return 'fa-file'
  }

  selectUser = (user:Partial<User>) => {
    this.currentUser = user
  }

}
