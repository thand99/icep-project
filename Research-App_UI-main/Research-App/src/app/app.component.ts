import { Component, OnInit } from '@angular/core';

import {  AuthService } from './src/app/services/auth/auth.service';
import {  GuidelinesService } from './src/app/services/guidelines/guidelines.service';
import {  NotesService } from './src/app/services/notes/notes.service';
import {  ProjectService } from './src/app/services/project/project.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Research-App';
  
  constructor(private reg: AuthService){}
   ngOnInit(): void {
     
   }
  login(data:any){
    this.reg.login(data).subscribe(data=>{
      console.log('this is your data',data) 
    })
  }

  signup(data:any){
    this.reg.signup(data).subscribe(data=>{
      console.log('this is your data',data)
    })
  }forgotPassword(data:any){
    this.reg.forgotPassword(data).subscribe(data=>{
      console.log('this is your data',data)
    })
  }updatePassword(data:any){
    this.reg.updatePassword(data).subscribe(data=>{
      console.log('this is your data',data)
    })
  }

}
