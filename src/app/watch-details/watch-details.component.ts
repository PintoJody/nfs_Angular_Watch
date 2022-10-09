import { Component, OnInit } from '@angular/core';
import { WatchService } from '../_services/watch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch-details',
  templateUrl: './watch-details.component.html',
  styleUrls: ['./watch-details.component.scss']
})
export class WatchDetailsComponent implements OnInit {
  detailWatch:any;
  id:any;

  constructor(private WatchS:WatchService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.WatchS.getDetail(this.id).subscribe((data:any) => {
      this.detailWatch = data.data;
    })
  }

}
