import { Component } from '@angular/core';
import { UsernamesService } from './usernames.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private usernameService: UsernamesService) {

  }
  text = 'something';
  test = 'inital';
  today = new Date();
  userName = 'sasi';
  showOrHide = 'show';
  userNames = [];
  showpara=false;
 
  imgUrl = "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"

  handleClick(){
    this.userNames = this. usernameService.getsecondNames();
    this.showpara = !this.showpara;
    this.showpara ? this.showOrHide = 'Hide' : this.showOrHide = 'show';
    }

    
}
