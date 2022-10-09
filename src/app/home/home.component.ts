import { DecodeService } from './../_services/decode.service';
import { Component, OnInit } from '@angular/core';
import { WatchService } from '../_services/watch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listWatch:any;

  constructor(private WatchS:WatchService, protected DecodeS:DecodeService) { }

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

    //Verif si l'utilisateur est connecté => si oui decode le token
    if(sessionStorage.getItem('auth-user') != null){
      const userId = this.DecodeS.decodeJwtId();
    }

  }

}
