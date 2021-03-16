import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernamesService {

  constructor() { }

  getsecondNames() {
    return ['mahi', 'uday' ,'sai' ,23,34,45,56,67]
  }
}
