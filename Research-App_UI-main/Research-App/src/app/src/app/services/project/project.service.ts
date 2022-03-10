import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  URL:string='http://localhost:3000/api/v1/projects';

  constructor(private http: HttpClient) { } 

  public createProject(data: any){
   console.log('Create project')
    return this.http.create(this.URL,data)
  }
  public getAllProjects(data: any){
    console.log('Hello from get all Project route 😜')
    return this.http.get(this.URL)
  }
  public getProject(data: any){
    console.log('Get project')
    return this.http.get(this.URL)
  }

  public updateProject(data: any){
  console.log('Project updated')
  return this.http.update(this.URL,data)
   }
  public deleteProject(data: any){
  console.log('Project deleted')
  return this.http.delete(this.URL,data)
   }


}
