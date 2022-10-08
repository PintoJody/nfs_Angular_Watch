import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
    template: ''
})
  
  export class LogoutComponent implements OnInit {
  
    constructor(private authService: AuthService) {}
  
    ngOnInit() {
      this.authService.logout();
    }
  
  }