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
}
