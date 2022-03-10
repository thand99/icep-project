import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuidelinesService {

  URL: string='http://localhost:3000/api/v1/guidelines'
  constructor(private http: HttpClient) { }

  public createGuideline(data:any){
    console.log('Guideline created')
    return this.http.create(this.URL,data)
  }
  public getAllGuidelines(data:any){
    console.log('Get all guidelines')
    return this.http.get(this.URL,data)
  }
  public getGuideline(data:any){
    console.log('Get guidelines')
    return this.http.get(this.URL,data)
  }
  public updateGuideline(data:any){
    console.log('Update guidelines')
    return this.http.update(this.URL,data)
  }
  public deleteGuideline(data:any){
    console.log('Delete guideline')
    return this.http.delete(this.URL)
  }
}
