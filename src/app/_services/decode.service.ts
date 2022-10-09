import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const token = JSON.parse(sessionStorage.getItem('auth-user') || '{}');

@Injectable({
  providedIn: 'root'
})
export class DecodeService {

  constructor() { }

  decodeJwtId(){
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token['token']);
    return decodedToken;
  }
}
