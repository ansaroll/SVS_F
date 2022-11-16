import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/core/services/stats.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 stats:{
    coursesCount: number;
    doctorantCount: number;
    profCount: number;
    staffCount: number;
    advertCount: number;
} = {
  coursesCount: 0,
  doctorantCount: 0,
  profCount: 0,
  staffCount: 0,
  advertCount: 0
}

statsMessages:{
  fileCount: number;
  doctorantMessages: number;
  adminMessages: number;
} = {
  fileCount: 0,
  doctorantMessages: 0,
  adminMessages: 0
}

  constructor(private statsService:StatsService) {}

  ngOnInit(): void {
    this.statsService.getStats().subscribe({next:data => this.stats = data , error:err => console.log({err})})
    this.statsService.getStatsMessages().subscribe({
      next:data => this.statsMessages = data,
      error:err => console.log({err})
    })
  }

}
