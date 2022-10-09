import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {
  listCart:any;
  totalPrice:any;
  error:any;
  
  constructor(private cartS:CartService) { }

  removeCart(product:any){
    this.cartS.removeFrontCart(product);
    location.reload();
  }

  ngOnInit(): void {
    this.totalPrice = this.cartS.getTotalPrice();
    this.listCart = this.cartS.getCart()
  }

}
