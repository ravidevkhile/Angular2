import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular 2 App</h1>
  <hr>
  <input id='input1' hidden #hiddenInput1>
  `
})
export class AppComponent implements AfterViewInit  {
  
  @ViewChild('hiddenInput1') hiddenInput1:ElementRef;
  
  ngAfterViewInit() {
    $(this.hiddenInput1.nativeElement).on('change', (e) => {
      console.log('Change made -- ngAfterViewInit');
      this.onChange(e);
    });
  }
  
  onChange(): void{
    console.log('Change made -- onChange');
  }
  
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/