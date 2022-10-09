import { Component, OnInit } from '@angular/core';
import { WatchService } from '../_services/watch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listWatch:any;

  constructor(private WatchS:WatchService) { }

  getAllWatch(){}

  getListWatchDesc(){
    this.WatchS.getAllWatch().subscribe((data:any) => {
      this.listWatch = data.data;
      this.listWatch = this.listWatch.sort((a: any, b: any) => {
        return <any>new Date(b.createdAt.date) - <any>new Date(a.createdAt.date);
      });
    })
  }


  ngOnInit(): void {
    this.getListWatchDesc();
  }

}
