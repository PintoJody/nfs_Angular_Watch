import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  saveCart(cart:any){
    return localStorage.setItem("cart", JSON.stringify(cart));
  }

  getCart(){
    let carItems = localStorage.getItem("cart");
    if(carItems == null){
      return [];
    }else{
      return JSON.parse(carItems);
    }
  }

  addCart(product:any){
    let cart = this.getCart();
    let foundProduct = cart.find((p:any) => p.id == product.id);
  
    if(foundProduct != undefined){
      foundProduct.quantity++;
    }else{
      product.quantity = 1;
      cart.push(product);
    }

    this.getPriceByQuantity(product);
    this.saveCart(cart);
    location.reload();
  }

  removeFrontCart(product:any){
    let cart = this.getCart();
    cart = cart.filter((p:any) => p.id != product.id);
    this.saveCart(cart);
  }

  getPriceByQuantity(product:any){
      product.totalByQuantity = product.price * product.quantity
  }

  getTotalPrice(){
    let cart = this.getCart();
    let total = 0;
    for(let product of cart){
      total += product.quantity * product.price
    }
    return total;
  }

  getTotalProduct(){
    let cart = this.getCart();
    let total = 0;
    for(let product of cart){
      total += product.quantity
    }
    return total;
  }
}
