import { Component } from '@angular/core';
import List from '../../Lista';
import  dataproject from  '../../data';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  allItems: List[] = dataproject;
  
  get items(){
    return this.allItems;
  }
}
