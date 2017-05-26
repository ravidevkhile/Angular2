import { Component, Input, Injectable, ApplicationRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Rx';
import {Pipe, PipeTransform} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { MultiselectComponent } from './multiselect/multiselect.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app works!';
  public items: Observable<Array<any>>;
  public _selectedItems: Array<any> = [];
  public watchedItems: Array<any>;
  private _items: Array<any>;
  constructor(private changeRef: ChangeDetectorRef, private appRef: ApplicationRef) {
    var LoremIpsum: any;
    this._items = [];
    this.items = Observable.of(this._items);
    this.items.subscribe(res => { console.log("Items changed"); this.watchedItems = res; });
  }

  get selectedItems(): any {
    return this._selectedItems;
  };

  createItems() {
    this._items.length = 0;
    var max: number = 20;
    var min: number = 10;
    var numItems: number = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("Adding " + numItems.toString() + " items");
    max = 6;
    min = 3;
    var i: number;
    for (i =0; i < numItems; i++) {
      var numWords: number = Math.floor(Math.random() * (max - min + 1)) + min;
      var label: string ='Ravindra '+ i;
      this._items.push({ label: label, value: i.toString()});
      console.log(label);
    }

    // Randomly choose a few items
    this.randomSelect();
  }

  randomSelect() {
    var numItems: number = this.getRandomInt(0, this._items.length) + 1;
    var min: number = 0;
    var max: number = this._items.length - 1;
    var toSelectIndexes: Array<number> = [];
    for (var j: number = 0; j < this.getRandomInt(1, numItems); j++) {
      var randIndex: number = this.getRandomInt(min, max);
      var arrIndex = toSelectIndexes.indexOf(randIndex);
      if (arrIndex == -1) {
        toSelectIndexes.push(randIndex);
        this._selectedItems.push(this._items[randIndex]);
      }
    }
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnInit() {
    this.createItems();
    let timer = Observable.timer(20000,20000);
    timer.subscribe(t=> {
      //this.createItems();
    });
  }

  onChange(event) { }
}
@Pipe({
  name: 'equal',
  pure: false
})

export class EqualPipe implements PipeTransform {
  transform(items: any, filter: any): any {
    if (filter && Array.isArray(items)) {
      let filterKeys = Object.keys(filter);
      return items.filter(item =>
        filterKeys.reduce((memo, keyName) => {
          console.log('Comparing');
          return item[keyName] === filter[keyName]; }, true)
      );
    } else {
      return items;
    }
  }
}

