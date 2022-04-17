import { Component, OnInit ,Output} from '@angular/core';
import { GituserServiceService } from '../gituser-service.service';
import {HttpClient} from '@angular/common/http';
import { User } from '../user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  user:User;
  username:string;
  gitUserServiceService:GituserServiceService;
  public showInput = true;
  public showData = false;

  submitUsername(){
    this.gitUserServiceService.getUserData(this.username);
    this.showInput = false;
    this.showData = true;
  }

  showUserInput(hideInput: any){
    this.showInput = hideInput;
    this.showData = false;
  }
  


  constructor(gitUserServiceService:GituserServiceService) { 
    this.gitUserServiceService = gitUserServiceService;
  }

  ngOnInit(): void {
  }

}
