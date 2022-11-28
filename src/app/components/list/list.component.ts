import { Component } from '@angular/core';
import List from '../../Lista';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  allItems: List[] = [
    {id:1, description: "Create Angular Project" },
    {id:2, description: "Learn Bootstrap" },
    {id:3, description: "Get Angular Router Information" },
    {id:4, description: "Implement Router" },
    {id:5, description: "Improve Bootstrap Implementation" },
  ];

  get items(){
    return this.allItems;
  }
}
