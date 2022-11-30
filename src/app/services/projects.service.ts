import { Injectable } from '@angular/core';
import {ListProj} from '../ListProj';
import {dataProject} from '../mock-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projectList: ListProj[] | any = dataProject;
  
  constructor() { }
  
  get_projects(): ListProj[]{
    return this.projectList;
  }

}
