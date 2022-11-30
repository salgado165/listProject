import { Component, OnInit } from '@angular/core';
import {ListProj} from '../../ListProj';
import  {dataProject} from  '../../mock-projects';
import {ProjectsService} from '../../services/projects.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  projectList! :ListProj[];

  constructor(private projectService: ProjectsService){}
  allItems: ListProj[] = dataProject;
  
  ngOnInit(): void {
    this.allItems = this.projectService.get_projects();
  }
}
