import { Component, OnInit } from '@angular/core';
import { WatchService } from '../_services/watch.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-watch-details',
  templateUrl: './watch-details.component.html',
  styleUrls: ['./watch-details.component.scss']
})
export class WatchDetailsComponent implements OnInit {
  detailWatch:any;
  id:any;
  isLoggedIn = false;

  constructor(private WatchS:WatchService, private route:ActivatedRoute, private storageService:StorageService, private authService: AuthService, private cartS:CartService) { }

  addCart(product:any){
    this.cartS.addCart(product);
  }

  ngOnInit(): void {
    this.cartS.getCart();
    this.isLoggedIn = this.storageService.isLoggedIn();
    this.id = this.route.snapshot.paramMap.get('id');

    this.WatchS.getDetail(this.id).subscribe((data:any) => {
      this.detailWatch = data.data;
    })
  }

}
