import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class GituserServiceService {

  user:User;
  repo:Repo;
  repoData = [];
  newUserData: any = [];
  showInput:boolean;
  showData:boolean

  constructor(private http: HttpClient) {
    this.user = new User("","",new Date(),new Date(),"",0,"");
    this.repo = new Repo ("","","","","",new Date(),new Date(),"")

   }

   getUserData(username:string){

    this.repoData.length = 0;


    interface ApiResponse{
      bio:string,
      avatar_url:string,
      created_at:Date,
      updated_at:Date,
      login:string,
      public_repos:string,
      html_url:string,
      name:string,
      full_name:string


    }
   }

}
