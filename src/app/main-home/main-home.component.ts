import { Component } from '@angular/core';



@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css'],
  
 
})
export class MainHomeComponent {
title: any;
isPhoneviewed: any;
selected: any;
clickMe() {
throw new Error('Method not implemented.');
}

  // Existing properties and methods...

  oneclick(): void {
    this.MyTest(); // Assuming MyTest is now correctly referenced
  }

  private MyTest() {
    console.log('MyTest function executed.');
  }


  

  // Other existing methods...
}
