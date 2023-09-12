import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountComponent {
  constructor(){
    console.log('account module loaded');
    
  }
}
